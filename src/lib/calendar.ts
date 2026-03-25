export interface CalendarEvent {
  title: string;
  dateObj: Date;
  dateDisplay: string;
  duration: string;
  desc: string;
  end?: Date;
}

function parseICSDate(dateStr: string): Date | null {
  if (!dateStr) return null;
  if (dateStr.length === 8) {
    return new Date(`${dateStr.substring(0,4)}-${dateStr.substring(4,6)}-${dateStr.substring(6,8)}T00:00:00Z`);
  }
  const match = dateStr.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z)?/);
  if (match) {
    const [_, y, m, d, h, min, s, z] = match;
    return new Date(`${y}-${m}-${d}T${h}:${min}:${s}${z ? 'Z' : ''}`);
  }
  return new Date(dateStr);
}

function parseGoogleICS(icsString: string): any[] {
  const lines = icsString.split(/\r?\n/);
  const events = [];
  let currentEvent: any = null;
  
  const unfoldedLines = [];
  for (const line of lines) {
    if (line.startsWith(' ') || line.startsWith('\t')) {
      if (unfoldedLines.length > 0) unfoldedLines[unfoldedLines.length - 1] += line.substring(1);
    } else {
      unfoldedLines.push(line);
    }
  }

  for (const line of unfoldedLines) {
    if (line.startsWith('BEGIN:VEVENT')) {
      currentEvent = {};
    } else if (line.startsWith('END:VEVENT')) {
      if (currentEvent && currentEvent.start) events.push(currentEvent);
      currentEvent = null;
    } else if (currentEvent) {
      const match = line.match(/^([^:]+):(.*)$/);
      if (match) {
        const [_, key, value] = match;
        const baseKey = key.split(';')[0];
        if (baseKey === 'SUMMARY') currentEvent.summary = value.replace(/\\,/g, ',').replace(/\\n/g, '\n');
        if (baseKey === 'DESCRIPTION') currentEvent.description = value.replace(/\\,/g, ',').replace(/\\n/g, '\n');
        if (baseKey === 'DTSTART') currentEvent.start = parseICSDate(value);
        if (baseKey === 'DTEND') currentEvent.end = parseICSDate(value);
      }
    }
  }
  return events;
}

export async function getUpcomingWorkshops(): Promise<CalendarEvent[]> {
  const url = 'https://calendar.google.com/calendar/ical/katharina.tappe%40gmx.net/public/basic.ics';
  
  try {
    const res = await fetch(url, { next: { revalidate: 300 } });
    const data = await res.text();
    const events = parseGoogleICS(data);
    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    
    const upcomingOfferings: CalendarEvent[] = [];
    
    for (const ev of events) {
      if (ev.start && ev.start >= todayStart) {
        upcomingOfferings.push({
          title: ev.summary || "Workshop",
          dateObj: ev.start,
          dateDisplay: ev.start.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' }),
          duration: `${ev.start.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })} - ${ev.end?.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }) || ""} Uhr`,
          desc: ev.description || ""
        });
      }
    }
    
    return upcomingOfferings.sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  } catch (err) {
    console.error("Error fetching calendar events:", err);
    return [];
  }
}
