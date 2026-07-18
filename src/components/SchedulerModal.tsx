import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Globe, Check, AlertCircle } from 'lucide-react';

interface SchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const dates = [
  { day: 'Mon', num: '20', label: 'July 20' },
  { day: 'Tue', num: '21', label: 'July 21' },
  { day: 'Wed', num: '22', label: 'July 22' },
  { day: 'Thu', num: '23', label: 'July 23' },
  { day: 'Fri', num: '24', label: 'July 24' },
];

const slots = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

export default function SchedulerModal({ isOpen, onClose }: SchedulerModalProps) {
  const [bookingMethod, setBookingMethod] = useState<'form' | 'calendly'>('form');
  const [selectedDate, setSelectedDate] = useState(dates[0]);
  const [selectedSlot, setSelectedSlot] = useState(slots[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 1500);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setCompleted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050816]/90 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-2xl bg-[#090d22] border border-white/10 rounded-3xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-bold text-white tracking-wide">Book Architectural Discovery</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-colors"
                aria-label="Close scheduler"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Toggle tabs */}
            <div className="flex border-b border-white/5 bg-white/[0.01]">
              <button
                type="button"
                onClick={() => setBookingMethod('form')}
                className={`flex-1 py-4 text-xs font-bold font-mono uppercase tracking-wider transition-all border-b-2 ${
                  bookingMethod === 'form'
                    ? 'border-cyan-400 text-white bg-white/[0.02]'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                1. Direct Reservation
              </button>
              <button
                type="button"
                onClick={() => setBookingMethod('calendly')}
                className={`flex-1 py-4 text-xs font-bold font-mono uppercase tracking-wider transition-all border-b-2 ${
                  bookingMethod === 'calendly'
                    ? 'border-indigo-400 text-white bg-white/[0.02]'
                    : 'border-transparent text-gray-500 hover:text-gray-300'
                }`}
              >
                2. Calendly Schedule
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto">
              {completed ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-wide">Consultation Scheduled!</h4>
                  <p className="mt-3 text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-medium">{name}</span>. Your architectural discovery call is confirmed for <span className="text-cyan-400 font-semibold">{selectedDate.label}</span> at <span className="text-cyan-400 font-semibold">{selectedSlot}</span>.
                  </p>
                  <p className="text-xs text-gray-500 font-mono mt-2">
                    A secure Google Meet / calendar invite is dispatched to {email}.
                  </p>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-8 px-6 py-2.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors cursor-pointer"
                  >
                    Done & Exit
                  </button>
                </div>
              ) : bookingMethod === 'calendly' ? (
                <div className="space-y-6 py-4 text-center">
                  <div className="w-16 h-16 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="h-8 w-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Book directly via Calendly</h4>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                    Select an official slot to schedule directly with our Lead Enterprise Software Specialist.
                  </p>

                  {/* Calendly Inline Embed with elegant fallback */}
                  <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 h-[340px] relative">
                    <iframe
                      src="https://calendly.com/aryanglobalsolutions?embed_domain=aryanglobalsolutions.com&embed_type=Inline"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      title="Select date and time on Calendly"
                      className="w-full h-full relative z-10"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-[#090d22] z-0">
                      <p className="text-xs text-gray-500 font-mono mb-4">// SECURE CALENDLY DISPATCH CHANNEL</p>
                      <a
                        href="https://calendly.com/aryanglobalsolutions"
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl tracking-wider uppercase inline-flex items-center gap-2"
                      >
                        Launch Live Calendar Desk
                      </a>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-gray-500">
                    // AUTOMATED DIRECT SCHEDULER ENGINE
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBooking} className="space-y-6">
                  {/* Select Date */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-3">
                      1. Select Date
                    </label>
                    <div className="grid grid-cols-5 gap-2">
                      {dates.map((d) => {
                        const isSel = selectedDate.num === d.num;
                        return (
                          <button
                            key={d.num}
                            type="button"
                            onClick={() => setSelectedDate(d)}
                            className={`p-3 rounded-2xl flex flex-col items-center justify-center border transition-all duration-200 ${
                              isSel
                                ? 'bg-cyan-500/15 border-cyan-400 text-white shadow-lg shadow-cyan-500/5'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                            }`}
                          >
                            <span className="text-[10px] font-mono tracking-widest uppercase mb-1">{d.day}</span>
                            <span className="text-lg font-extrabold">{d.num}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Select Time Slot */}
                  <div>
                    <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-indigo-400" /> 2. Select Time (UTC-08:00 Pacific Standard)
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {slots.map((sl) => {
                        const isSel = selectedSlot === sl;
                        return (
                          <button
                            key={sl}
                            type="button"
                            onClick={() => setSelectedSlot(sl)}
                            className={`py-3 rounded-xl text-xs font-semibold tracking-wide border transition-all duration-200 ${
                              isSel
                                ? 'bg-indigo-500/15 border-indigo-500 text-white'
                                : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                            }`}
                          >
                            {sl}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Booking details */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <label className="block text-xs font-bold font-mono text-gray-400 uppercase tracking-wider">
                      3. Your Enterprise Credentials
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Corporate Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-4 flex gap-3 items-start">
                    <Globe className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <p className="text-[11px] text-gray-400 leading-relaxed">
                      This free consultation connects you directly with a Lead Enterprise Software Partner. We will analyze your system architecture, verify required external APIs, and suggest a zero-downtime microservice strategy.
                    </p>
                  </div>

                  {/* CTA Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-xl shadow-indigo-600/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Confirm Free Booking'
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
