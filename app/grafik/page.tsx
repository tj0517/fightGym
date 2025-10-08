"use client"
import React, { use, useState } from "react";
import Menu from "../components/menu";
import Footer from "../components/footer";

type DayName = "Poniedziałek" | "Wtorek" | "Środa" | "Czwartek" | "Piątek";

interface Activity {
  timeStart: string;
  title: string;
  trener: string;
}

const days: DayName[] = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek"];


const schedule: Record<DayName, Activity[]> = {
  "Poniedziałek": [
    { timeStart: "7:30", title: "Cardio", trener: "Anna Kowalska" },
    { timeStart: "9:00", title: "Box", trener: "Jan Nowak" },
    { timeStart: "10:30", title: "Siłownia", trener: "Piotr Wiśniewski" },
    { timeStart: "12:00", title: "MMA", trener: "Kamil Zieliński" },
    { timeStart: "17:00", title: "Kickboxing", trener: "Anna Kowalska" },
  ],
  "Wtorek": [
    { timeStart: "8:00", title: "Cardio", trener: "Anna Kowalska" },
    { timeStart: "9:30", title: "Kickboxing", trener: "Piotr Wiśniewski" },
    { timeStart: "11:00", title: "Box", trener: "Jan Nowak" },
    { timeStart: "13:00", title: "Siłownia", trener: "Kamil Zieliński" },
    { timeStart: "16:00", title: "MMA", trener: "Anna Kowalska" },
  ],
  "Środa": [
    { timeStart: "7:00", title: "Cardio", trener: "Anna Kowalska" },
    { timeStart: "8:00", title: "MMA", trener: "Kamil Zieliński" },
    { timeStart: "10:00", title: "Kickboxing", trener: "Piotr Wiśniewski" },
    { timeStart: "12:30", title: "Siłownia", trener: "Jan Nowak" },
  ],
  "Czwartek": [
    { timeStart: "7:30", title: "Cardio", trener: "Anna Kowalska" },
    { timeStart: "9:15", title: "Box", trener: "Jan Nowak" },
    { timeStart: "11:30", title: "Siłownia", trener: "Piotr Wiśniewski" },
    { timeStart: "13:00", title: "MMA", trener: "Kamil Zieliński" },
  ],
  "Piątek": [
    { timeStart: "7:00", title: "Cardio", trener: "Anna Kowalska" },
    { timeStart: "9:00", title: "Kickboxing", trener: "Piotr Wiśniewski" },
    { timeStart: "10:45", title: "MMA", trener: "Kamil Zieliński" },
    { timeStart: "12:30", title: "Box", trener: "Jan Nowak" },
  ],
};

export default function FightGymSchedule() {
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const dayKeys = Object.keys(schedule) as DayName[];


  const handlePrev = () => {
    setCurrentDayIndex((prev) => (prev === 0 ? days.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentDayIndex((prev) => (prev === days.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full mx-auto bg-stone-900 min-h-screen">
      <Menu />

      <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 text-orange-400 w-full text-center py-20">
        Co <span className="text-white">Trenujemy?</span>
      </h1>

      {/* MOBILE — pojedynczy dzień ze strzałkami */}
      <div className="md:hidden flex flex-col items-center mb-20">
        <div className="flex items-center justify-between w-full sm:w-4/5 px-6 mb-4">
          <button
            onClick={handlePrev}
            className="text-orange-400 text-4xl font-bold hover:text-orange-500 transition"
          >
            ‹
          </button>

          <h3 className="text-2xl font-semibold text-white text-center">
            {days[currentDayIndex]}
          </h3>

          <button
            onClick={handleNext}
            className="text-orange-400 text-4xl font-bold hover:text-orange-500 transition"
          >
            ›
          </button>
        </div>

        <div className="bg-stone-800 border border-stone-700 rounded-lg shadow-md w-3/4 mt-10">
          <div className="flex flex-col divide-y divide-stone-700">
            {schedule[days[currentDayIndex]].map(
              ({ timeStart, title, trener }, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-stone-700 transition-all flex flex-col"
                >
                  <span className="text-white text-sm font-bold">
                    {timeStart}
                  </span>
                  <span className="text-orange-400 text-lg font-light">
                    {title}
                  </span>
                  <span className="text-gray-400 text-xs mt-1">{trener}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* DESKTOP — klasyczna siatka */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6 text-white mb-20 px-4 md:px-5 xl:px-20 h-fit">
        {days.map((day) => (
          <div
            key={day}
            className="shadow-md overflow-hidden bg-stone-800 rounded-lg border border-stone-700 flex flex-col h-fit"
          >
            <h3 className="text-2xl font-semibold text-white text-center bg-orange-400 py-5 border-b border-stone-700">
              {day}
            </h3>
            <div className="flex flex-col divide-y divide-stone-700">
              {schedule[day].map(({ timeStart, title, trener }, index) => (
                <div
                  key={index}
                  className="p-4 hover:bg-stone-700 transition-all flex flex-col"
                >
                  <span className="text-white text-sm font-bold">
                    {timeStart}
                  </span>
                  <span className="text-orange-400 text-lg font-light">
                    {title}
                  </span>
                  <span className="text-gray-400 text-xs mt-1">{trener}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
