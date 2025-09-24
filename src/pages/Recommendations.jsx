import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

export default function Recommendations() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! 👋 I’m your Virtual Counsellor Mentora. Ask me anything about study abroad, applications, or services."
    }
  ]);
  const [input, setInput] = useState("");
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false); // for mobile toggle
  const messagesEndRef = useRef(null);

  const faqs = [
    "How do I apply to universities abroad?",
    "What are the English language requirements?",
    "How can I contact my counsellor?",
    "Scholarship opportunities?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = (text) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setMessages((prev) => [...prev, { sender: "bot", text: "Thinking..." }]);

    const eventSource = new EventSource(
      `https://fes-mentoro-backend.onrender.com/stream?q=${encodeURIComponent(text)}`
    );

    let responseText = "";

    eventSource.onmessage = (e) => {
      if (e.data === "[DONE]") {
        eventSource.close();
      } else {
        if (responseText === "") {
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { sender: "bot", text: e.data };
            return copy;
          });
        } else {
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = {
              sender: "bot",
              text: copy[copy.length - 1].text + e.data,
            };
            return copy;
          });
        }
        responseText += e.data;
      }
    };

    eventSource.onerror = (err) => {
      console.error("SSE error:", err);
      eventSource.close();
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          sender: "bot",
          text: "⚠️ Something went wrong!"
        };
        return copy;
      });
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input.trim());
    setInput("");
  };

  return (
    <section className="pt-14 pb-8 bg-gray-100 relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-fes-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-fes-deep/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            Meet <span className="gradient-text">Mentora</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Your AI-powered study abroad counselor. Get personalized guidance for applications, scholarships, and visa processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 min-h-[500px] sm:min-h-[600px]">
          {/* Sidebar */}
          <div className={`lg:col-span-1 ${showSidebar ? "fixed inset-0 z-30 bg-black/50 lg:relative lg:bg-transparent" : "hidden lg:block"}`} onClick={(e) => {
            if (e.target === e.currentTarget && showSidebar) {
              setShowSidebar(false);
            }
          }}>
            <div className={`glass-strong p-6 h-full ${showSidebar ? "m-4 lg:m-0 max-h-[80vh] overflow-y-auto" : ""}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Quick Start</h2>
                {showSidebar && (
                  <button 
                    onClick={() => setShowSidebar(false)}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                )}
              </div>
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">Popular Questions</h3>
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveFAQ(idx);
                      sendMessage(faq);
                      setShowSidebar(false);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-300 text-sm hover:shadow-md ${
                      activeFAQ === idx 
                        ? "bg-fes-blue text-white shadow-lg" 
                        : "bg-white/60 text-gray-700 hover:bg-white/80"
                    }`}
                  >
                    {faq}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Chat Panel */}
          <div className="lg:col-span-3 flex flex-col">
            {/* Mobile Sticky Header */}
            <div className="lg:hidden glass-strong border-b border-white/20 p-3 sticky top-0 z-20">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900">Mentora</h2>
                <button
                  className="px-3 py-1 rounded-lg bg-fes-blue text-white text-sm"
                  onClick={() => setShowSidebar(!showSidebar)}
                >
                  FAQs
                </button>
              </div>
            </div>
            
            <div className="glass flex flex-col h-full">
              {/* Desktop Chat Header */}
              <div className="hidden lg:flex items-center justify-between p-4 border-b border-white/20">
                <h2 className="text-xl font-semibold text-gray-900">Chat with Mentora</h2>
              </div>

              {/* Messages (scrollable) */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`px-4 py-3 rounded-2xl break-words max-w-[85%] sm:max-w-[70%] leading-relaxed ${
                        msg.sender === "bot"
                          ? "bg-white/60 border border-white/20 text-gray-800 shadow-sm"
                          : "bg-fes-blue text-white shadow-md"
                      }`}
                    >
                      {msg.text === "Thinking..." ? (
                        <div className="flex items-center space-x-2">
                          <span className="text-sm opacity-70">Thinking</span>
                          <div className="flex space-x-1">
                            <span className="w-2 h-2 bg-fes-blue rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-fes-blue rounded-full animate-bounce [animation-delay:0.2s]"></span>
                            <span className="w-2 h-2 bg-fes-blue rounded-full animate-bounce [animation-delay:0.4s]"></span>
                          </div>
                        </div>
                      ) : (
                        <div className="text-sm sm:text-base leading-relaxed">
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <p className="m-0 mb-2">{children}</p>,
                              ul: ({ children }) => <ul className="list-disc ml-5 mb-2">{children}</ul>,
                              li: ({ children }) => <li className="mb-1">{children}</li>,
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      )}
                    </motion.div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/20">
                <div className="flex gap-2 sm:gap-3">
                  <input
                    className="flex-1 p-2 sm:p-3 rounded-xl bg-white/60 border border-white/30 text-gray-900 placeholder:text-sm sm:placeholder:text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fes-blue focus:border-transparent"
                    placeholder="Ask me anything about studying abroad..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  />
                  <button
                    onClick={handleSend}
                    className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-fes-blue text-white text-sm sm:text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
