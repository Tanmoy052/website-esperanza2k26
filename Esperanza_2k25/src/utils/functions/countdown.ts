export function getRemainingTime(targetDateStr: string): string {
    const targetDate: Date = new Date(targetDateStr);
    const now: Date = new Date();
    const diff: number = targetDate.getTime() - now.getTime();
  
    if (diff <= 0) {
      return "00:00:00:00";
    }
  
    const days: string = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours: string = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes: string = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    const seconds: string = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  
    return `${days}:${hours}:${minutes}:${seconds}`;
  }