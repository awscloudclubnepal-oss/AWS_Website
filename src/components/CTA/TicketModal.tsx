"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Download, X, Loader2, Ticket } from "lucide-react";
import Image from "next/image";

type TicketModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TicketModal = ({ isOpen, onClose }: TicketModalProps) => {
  const [email, setEmail] = useState("");
  const [ticketImage, setTicketImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchTicket = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTicketImage(null);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(
        `${apiUrl}/tickets/download?email=${encodeURIComponent(email)}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("No ticket found for this email. Please make sure you have registered for the event.");
        }
        throw new Error("Failed to fetch ticket. Please try again.");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setTicketImage(imageUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (ticketImage) {
      const link = document.createElement("a");
      link.href = ticketImage;
      link.download = `aws-scd-ticket-${email}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleClose = () => {
    setEmail("");
    setTicketImage(null);
    setError(null);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 p-2 bg-accent/40 backdrop-blur-sm z-50 flex justify-center items-center transition-opacity duration-300"
      onClick={handleClose}
    >
      <div
        className="bg-card p-6 sm:p-8 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Ticket className="w-5 h-5 sm:w-6 sm:h-6" />
            <h2 className="text-xl sm:text-2xl font-bold">View Your Ticket</h2>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-accent rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground mb-6">
          Already registered? Enter your email to view and download your event ticket.
        </p>

        {/* Email Form */}
        {!ticketImage && (
          <form onSubmit={handleFetchTicket} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Registered Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
            </div>

            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full text-white"
              disabled={loading || !email}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Fetching Ticket...
                </>
              ) : (
                "Get My Ticket"
              )}
            </Button>
          </form>
        )}

        {/* Ticket Display */}
        {ticketImage && (
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden border border-border">
              <Image
                src={ticketImage}
                alt="Your Event Ticket"
                className="w-full h-auto"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                onClick={handleDownload}
                className="flex-1 text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Ticket
              </Button>
              <Button
                onClick={() => {
                  setTicketImage(null);
                  setEmail("");
                }}
                variant="outline"
                className="flex-1"
              >
                Check Another Email
              </Button>
            </div>
          </div>
        )}

        {/* Close Button */}
        <div className="mt-6 pt-4 border-t border-border">
          <Button
            onClick={handleClose}
            variant="ghost"
            className="w-full"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
