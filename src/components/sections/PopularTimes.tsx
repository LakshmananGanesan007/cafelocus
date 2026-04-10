import { useState } from "react";
import { Calendar, TrendingUp, Coffee } from "lucide-react";

const PopularTimes = () => {
  const [selectedDay, setSelectedDay] = useState("Sunday");
  const [hoveredHour, setHoveredHour] = useState<string | null>(null);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const popularityData: Record<string, Array<{hour: string, value: number, label: string, crowd: string}>> = {
    Monday: [
      { hour: "11a", value: 25, label: "11:00 AM", crowd: "Quiet" },
      { hour: "12p", value: 35, label: "12:00 PM", crowd: "Light" },
      { hour: "1p", value: 45, label: "1:00 PM", crowd: "Moderate" },
      { hour: "2p", value: 40, label: "2:00 PM", crowd: "Light" },
      { hour: "3p", value: 30, label: "3:00 PM", crowd: "Quiet" },
      { hour: "4p", value: 35, label: "4:00 PM", crowd: "Light" },
      { hour: "5p", value: 50, label: "5:00 PM", crowd: "Moderate" },
      { hour: "6p", value: 65, label: "6:00 PM", crowd: "Busy" },
      { hour: "7p", value: 75, label: "7:00 PM", crowd: "Very Busy" },
      { hour: "8p", value: 70, label: "8:00 PM", crowd: "Busy" },
      { hour: "9p", value: 55, label: "9:00 PM", crowd: "Moderate" },
      { hour: "10p", value: 30, label: "10:00 PM", crowd: "Quiet" },
    ],
    Tuesday: [
      { hour: "11a", value: 28, label: "11:00 AM", crowd: "Quiet" },
      { hour: "12p", value: 38, label: "12:00 PM", crowd: "Light" },
      { hour: "1p", value: 48, label: "1:00 PM", crowd: "Moderate" },
      { hour: "2p", value: 42, label: "2:00 PM", crowd: "Light" },
      { hour: "3p", value: 32, label: "3:00 PM", crowd: "Quiet" },
      { hour: "4p", value: 38, label: "4:00 PM", crowd: "Light" },
      { hour: "5p", value: 52, label: "5:00 PM", crowd: "Moderate" },
      { hour: "6p", value: 68, label: "6:00 PM", crowd: "Busy" },
      { hour: "7p", value: 78, label: "7:00 PM", crowd: "Very Busy" },
      { hour: "8p", value: 72, label: "8:00 PM", crowd: "Busy" },
      { hour: "9p", value: 58, label: "9:00 PM", crowd: "Moderate" },
      { hour: "10p", value: 32, label: "10:00 PM", crowd: "Quiet" },
    ],
    Wednesday: [
      { hour: "11a", value: 30, label: "11:00 AM", crowd: "Quiet" },
      { hour: "12p", value: 40, label: "12:00 PM", crowd: "Light" },
      { hour: "1p", value: 50, label: "1:00 PM", crowd: "Moderate" },
      { hour: "2p", value: 45, label: "2:00 PM", crowd: "Light" },
      { hour: "3p", value: 35, label: "3:00 PM", crowd: "Light" },
      { hour: "4p", value: 40, label: "4:00 PM", crowd: "Light" },
      { hour: "5p", value: 55, label: "5:00 PM", crowd: "Moderate" },
      { hour: "6p", value: 70, label: "6:00 PM", crowd: "Busy" },
      { hour: "7p", value: 80, label: "7:00 PM", crowd: "Very Busy" },
      { hour: "8p", value: 75, label: "8:00 PM", crowd: "Busy" },
      { hour: "9p", value: 60, label: "9:00 PM", crowd: "Moderate" },
      { hour: "10p", value: 35, label: "10:00 PM", crowd: "Light" },
    ],
    Thursday: [
      { hour: "11a", value: 32, label: "11:00 AM", crowd: "Quiet" },
      { hour: "12p", value: 42, label: "12:00 PM", crowd: "Light" },
      { hour: "1p", value: 52, label: "1:00 PM", crowd: "Moderate" },
      { hour: "2p", value: 48, label: "2:00 PM", crowd: "Moderate" },
      { hour: "3p", value: 38, label: "3:00 PM", crowd: "Light" },
      { hour: "4p", value: 45, label: "4:00 PM", crowd: "Moderate" },
      { hour: "5p", value: 60, label: "5:00 PM", crowd: "Busy" },
      { hour: "6p", value: 75, label: "6:00 PM", crowd: "Busy" },
      { hour: "7p", value: 85, label: "7:00 PM", crowd: "Very Busy" },
      { hour: "8p", value: 80, label: "8:00 PM", crowd: "Busy" },
      { hour: "9p", value: 65, label: "9:00 PM", crowd: "Busy" },
      { hour: "10p", value: 40, label: "10:00 PM", crowd: "Light" },
    ],
    Friday: [
      { hour: "11a", value: 35, label: "11:00 AM", crowd: "Light" },
      { hour: "12p", value: 48, label: "12:00 PM", crowd: "Moderate" },
      { hour: "1p", value: 58, label: "1:00 PM", crowd: "Moderate" },
      { hour: "2p", value: 55, label: "2:00 PM", crowd: "Moderate" },
      { hour: "3p", value: 45, label: "3:00 PM", crowd: "Moderate" },
      { hour: "4p", value: 55, label: "4:00 PM", crowd: "Moderate" },
      { hour: "5p", value: 75, label: "5:00 PM", crowd: "Busy" },
      { hour: "6p", value: 88, label: "6:00 PM", crowd: "Very Busy" },
      { hour: "7p", value: 95, label: "7:00 PM", crowd: "Peak Hour" },
      { hour: "8p", value: 90, label: "8:00 PM", crowd: "Very Busy" },
      { hour: "9p", value: 75, label: "9:00 PM", crowd: "Busy" },
      { hour: "10p", value: 50, label: "10:00 PM", crowd: "Moderate" },
    ],
    Saturday: [
      { hour: "11a", value: 45, label: "11:00 AM", crowd: "Moderate" },
      { hour: "12p", value: 60, label: "12:00 PM", crowd: "Busy" },
      { hour: "1p", value: 75, label: "1:00 PM", crowd: "Busy" },
      { hour: "2p", value: 70, label: "2:00 PM", crowd: "Busy" },
      { hour: "3p", value: 65, label: "3:00 PM", crowd: "Busy" },
      { hour: "4p", value: 70, label: "4:00 PM", crowd: "Busy" },
      { hour: "5p", value: 82, label: "5:00 PM", crowd: "Very Busy" },
      { hour: "6p", value: 92, label: "6:00 PM", crowd: "Peak Hour" },
      { hour: "7p", value: 98, label: "7:00 PM", crowd: "Peak Hour" },
      { hour: "8p", value: 95, label: "8:00 PM", crowd: "Peak Hour" },
      { hour: "9p", value: 85, label: "9:00 PM", crowd: "Very Busy" },
      { hour: "10p", value: 65, label: "10:00 PM", crowd: "Busy" },
    ],
    Sunday: [
      { hour: "11a", value: 50, label: "11:00 AM", crowd: "Moderate" },
      { hour: "12p", value: 65, label: "12:00 PM", crowd: "Busy" },
      { hour: "1p", value: 78, label: "1:00 PM", crowd: "Busy" },
      { hour: "2p", value: 72, label: "2:00 PM", crowd: "Busy" },
      { hour: "3p", value: 68, label: "3:00 PM", crowd: "Busy" },
      { hour: "4p", value: 72, label: "4:00 PM", crowd: "Busy" },
      { hour: "5p", value: 80, label: "5:00 PM", crowd: "Very Busy" },
      { hour: "6p", value: 88, label: "6:00 PM", crowd: "Very Busy" },
      { hour: "7p", value: 85, label: "7:00 PM", crowd: "Very Busy" },
      { hour: "8p", value: 82, label: "8:00 PM", crowd: "Very Busy" },
      { hour: "9p", value: 70, label: "9:00 PM", crowd: "Busy" },
      { hour: "10p", value: 55, label: "10:00 PM", crowd: "Moderate" },
    ],
  };

  const currentData = popularityData[selectedDay];
  const maxValue = Math.max(...currentData.map(d => d.value));
  
  const getCrowdColor = (crowd: string) => {
    switch(crowd) {
      case "Quiet": return "bg-emerald-500/60";
      case "Light": return "bg-sky-500/60";
      case "Moderate": return "bg-amber-500/60";
      case "Busy": return "bg-orange-500/60";
      case "Very Busy": return "bg-rose-500/60";
      case "Peak Hour": return "bg-gold";
      default: return "bg-gold/40";
    }
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();
    let currentHourLabel = "";
    
    if (currentHour >= 11 && currentHour <= 22) {
      if (currentHour === 12) currentHourLabel = "12p";
      else if (currentHour > 12) currentHourLabel = (currentHour - 12) + "p";
      else currentHourLabel = currentHour + "a";
    } else {
      currentHourLabel = "7p"; // Fallback/Default visual state
    }
    
    const currentSlot = currentData.find(d => d.hour === currentHourLabel);
    if (currentSlot) {
      return { status: currentSlot.crowd, value: currentSlot.value, hour: currentSlot.label };
    }
    return { status: "Moderate", value: 50, hour: "7:00 PM" };
  };

  const currentStatus = getCurrentStatus();

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-secondary">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex justify-center mb-4">
            <Coffee className="w-8 h-8 text-gold" />
          </div>
          <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-body font-semibold mb-3 md:mb-4">Visit Us</p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">Popular Times</h2>
          <p className="font-body text-sm md:text-base text-muted-foreground px-4">Plan your visit based on our busiest hours</p>
        </div>

        {/* Day Selection Buttons (Mobile Friendly Wrapping) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-full font-body text-xs sm:text-sm transition-all duration-300 ${
                selectedDay === day
                  ? "bg-gold text-espresso font-semibold shadow-md scale-105"
                  : "bg-background text-muted-foreground hover:bg-gold/20"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Graph Card */}
        <div className="bg-background rounded-2xl p-4 sm:p-6 shadow-lg">
          
          {/* Calendar Label & Legend */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="font-body font-semibold text-foreground text-sm sm:text-base">{selectedDay}</span>
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-3 text-[10px] sm:text-xs w-full sm:w-auto">
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-emerald-500/60 rounded-sm"></div><span>Quiet</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-sky-500/60 rounded-sm"></div><span>Light</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-amber-500/60 rounded-sm"></div><span>Moderate</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-orange-500/60 rounded-sm"></div><span>Busy</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-rose-500/60 rounded-sm"></div><span>Very Busy</span></div>
              <div className="flex items-center gap-1"><div className="w-2.5 h-2.5 bg-gold rounded-sm"></div><span>Peak</span></div>
            </div>
          </div>

          {/* Hover Tooltip - FIXED HEIGHT to prevent Layout Shift */}
          <div className="h-8 flex items-center justify-center mb-2">
            <span 
              className={`inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-xs font-body transition-opacity duration-200 ${
                hoveredHour ? "opacity-100" : "opacity-0"
              }`}
            >
              {hoveredHour || "Hover"}
            </span>
          </div>

          {/* Bar Chart Container */}
          <div className="flex items-end justify-center gap-1 sm:gap-2 h-48 sm:h-64 mb-2">
            {currentData.map((item) => (
              <div key={item.hour} className="flex flex-col items-center justify-end flex-1 group h-full">
                
                {/* The Bar */}
                <div className="w-full flex-1 flex items-end">
                  <div 
                    className={`w-full rounded-t-md sm:rounded-t-lg transition-all duration-300 cursor-pointer ${getCrowdColor(item.crowd)} hover:opacity-80 hover:scale-y-105 active:scale-y-105 origin-bottom`}
                    style={{ height: `${(item.value / maxValue) * 100}%` }}
                    onMouseEnter={() => setHoveredHour(`${item.label} - ${item.crowd}`)}
                    onMouseLeave={() => setHoveredHour(null)}
                    onTouchStart={() => setHoveredHour(`${item.label} - ${item.crowd}`)}
                  />
                </div>

                {/* Hour Label */}
                <span className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground font-body mt-2">
                  {item.hour}
                </span>
              </div>
            ))}
          </div>

          {/* Time of Day Guides */}
          <div className="flex justify-between text-[9px] sm:text-[10px] md:text-xs text-muted-foreground px-1 sm:px-2 mt-2 pt-3 border-t border-border/50">
            <span className="flex-1 text-left">Morning</span>
            <span className="flex-1 text-center">Afternoon</span>
            <span className="flex-1 text-center hidden sm:block">Evening</span>
            <span className="flex-1 text-right">Night</span>
          </div>
        </div>

        {/* Current Live Status */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-3 bg-background px-4 sm:px-6 py-3 rounded-full shadow-md w-full md:w-auto justify-center">
            <span className={`w-3 h-3 rounded-full shrink-0 animate-pulse ${
              currentStatus.status === "Peak Hour" ? "bg-gold" :
              currentStatus.status === "Very Busy" ? "bg-rose-500" :
              currentStatus.status === "Busy" ? "bg-orange-500" :
              currentStatus.status === "Moderate" ? "bg-amber-500" : "bg-emerald-500"
            }`} />
            <span className="font-body text-xs sm:text-sm text-foreground font-medium truncate">
              {currentStatus.status === "Peak Hour" ? "🔴 Peak Hour - Reserve Recommended" :
               currentStatus.status === "Very Busy" ? "🟠 Very Busy - Expect Wait" :
               currentStatus.status === "Busy" ? "🟡 Busy - Good to Book" :
               currentStatus.status === "Moderate" ? "🟢 Moderate - Walk-ins Welcome" :
               "✅ Quiet - Best Time to Visit"} <span className="hidden sm:inline">({currentStatus.hour})</span>
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-muted-foreground bg-background/50 px-4 py-2 rounded-full md:bg-transparent md:p-0">
            <TrendingUp className="w-4 h-4 text-gold" />
            <span>Peak hours: 7 PM - 8:30 PM (Weekends)</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PopularTimes;