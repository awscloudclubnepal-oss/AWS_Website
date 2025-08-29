"use client";
import { useState, useEffect, EventHandler } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { Clock , MapPin , Calendar , Users } from "lucide-react";
import {  motion } from "motion/react";
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
// 10 = > Novemver  , 27 -> november 15 and rest last three are the hour , minutes and second clock  
const eventdate = new Date (2025,10,15,10,0,0)
const eventInformation = {
    venue:" Advance College of Engineering & Management",
    time : {
        from :"00:00AM",
        to:"00:00PM"
    },
    capacity:"1500"
}
const venue = " Advance College of Engineering & Management"
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = eventdate.getTime() - new Date().getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = (e:any) => {
    e.target.style.transition = "transform 0.3s";
    e.target.style.transform = "scale(0.95)";
    setTimeout(() => {
        e.target.style.transform = "scale(1)";
    }, 300);
    if (navigator.share) {
      navigator.share({
        title: "Aws Student Community Day 2025",
        text: "Get ready for the biggest student event of Nepal",
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      console.log("[v0] Event link copied to clipboard");
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <div id="schedule" className="relative bg-background py-16 lg:py-36">
      {/* Hero Section with Countdown */}
      <div
        className="relative overflow-hidden
        "
      >
        <div className="absolute inset-0 bg-[url('/abstract-tech-conference-background.png')] opacity-5 bg-cover bg-center" />

        <div className="relative max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative text-center mb-12">
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 tracking-tight">
              <p className="text-3xl">Aws</p> Student Community Day <span className="text-primary">2025</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {/* Any  */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corrupti, nulla tenetur praesentium excepturi pariatur eligendi minus assumenda libero non, </p>
            
          </div>

          {/* Countdown Display */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <Card
                key={item.label}
                className="bg-card/80 backdrop-blur-sm border-border/50 hover:bg-card transition-colors
                hover:border-bg-gradient-to-br from-primary via-background to-accent"
              >
                <CardContent className="p-6 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 font-mono">
                    {item.value.toString().padStart(2, "0")}
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">
                    {item.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" >
            <Button size="lg">Register Now</Button>
            <Button variant="outline" size="lg" onClick={(e)=>handleShare(e)} >
              <Share2 className="w-5 h-5 mr-2"  />
              Share Event
            </Button>
          </div>
        </div>
      </div>

      {/* Event Details */}
      {/* <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8"> */}
     <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Date</h3>
                  <p className="text-muted-foreground">
                    {eventdate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-accent mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">Time</h3>
                  <p className="text-muted-foreground">00:00 AM to 00:00 PM </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-primary mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    Location
                  </h3>
                  <p className="text-muted-foreground">
                    {venue}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-accent mr-3" />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    Capacity
                  </h3>
                  <p className="text-muted-foreground">2,500 Attendees</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div> 

        </div>
  );
}