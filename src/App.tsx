/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Settings, BookOpen, Mail, RotateCcw, Minus, Plus, Info } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount(prev => prev + 1), []);
  const decrement = useCallback(() => setCount(prev => Math.max(0, prev - 1)), []);
  const reset = useCallback(() => setCount(0), []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-white/30 selection:text-white">
      {/* Header */}
      <header className="border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-black tracking-tighter italic">
            <span className="text-white drop-shadow-md">ELLIRON</span>
            <span className="bg-white text-black px-2 py-0.5 rounded italic leading-none flex items-center justify-center shadow-lg">
              GRAPHICS
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/70 hover:text-white font-medium transition-colors">Home</a>
            <a href="#" className="text-white/70 hover:text-white font-medium transition-colors">Tools</a>
            <a href="#" className="text-white/70 hover:text-white font-medium transition-colors">Blog</a>
            <a href="#" className="text-white/70 hover:text-white font-medium transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Counter Area */}
          <div className="lg:col-span-8 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-8 flex flex-col items-center shadow-2xl">
            <h1 className="text-4xl font-black text-white mb-2 tracking-tight uppercase">Tap Counter</h1>
            <p className="text-white/60 mb-8 text-sm font-medium">PRECISION TRACKING BY ELLIRON</p>
            
            <motion.div 
              key={count}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-9xl font-black text-white mb-12 tabular-nums drop-shadow-2xl"
            >
              {count}
            </motion.div>

            <div className="w-full max-w-md space-y-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={increment}
                className="w-full py-4 backdrop-blur-lg bg-white/20 hover:bg-white/30 border border-white/30 text-white text-3xl font-bold rounded-xl shadow-xl transition-all cursor-pointer ring-0 focus:ring-2 focus:ring-white/50 outline-none"
              >
                Tap
              </motion.button>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={decrement}
                  className="w-full py-2.5 backdrop-blur-md bg-white/10 hover:bg-white/20 border border-white/20 text-white text-lg font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Minus className="w-5 h-5 opacity-70" />
                  Minus
                </motion.button>
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={reset}
                  className="w-full py-2.5 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 text-lg font-bold rounded-xl shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-4 h-4 opacity-70" />
                  Reset
                </motion.button>
              </div>
            </div>

            <div className="mt-16 w-full border-t border-white/10 pt-8">
              <h2 className="text-xl font-bold text-white mb-4">
                How to use our Tap Counter
              </h2>
              <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                <p>
                  Simply tap the button that says "Tap" and you will see the tap count update.
                </p>
                <p>
                  Below is a "Minus" button that will subtract 1 from the tap count.
                </p>
                <p>
                  And also the "Reset" button. This will clear the tap count, starting it back at zero.
                </p>
              </div>

              {/* Detailed Content */}
              <div className="mt-12 space-y-8 text-white/60 text-base leading-relaxed">
                <section>
                  <h3 className="text-white text-xl font-bold mb-3">What is a Tap Counter?</h3>
                  <p>
                    A tap counter is a simple but powerful digital tool that records every tap or click on your screen and turns it into an accurate running count.
                  </p>
                  <p className="mt-4">
                    It is widely used in everyday tasks and professional environments where precision matters. From tracking stock and inventory to counting attendance at events, it helps users stay organized, efficient, and accurate. Industries like retail, warehouse management, and property services rely on counting tools like this to reduce mistakes and save time.
                  </p>
                  <p className="mt-4">
                    Modern tap counters are lightweight web applications that work on any device — meaning you can use them instantly on your phone, tablet, or computer without installing anything.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-xl font-bold mb-3">Using Tap Counters for Businesses</h3>
                  <p>
                    Tap counters play an important role in business operations, especially in inventory management and stock tracking. Most industries depend on storing raw materials, processing them into products, and delivering them to customers — all of which require accurate counting at every stage.
                  </p>
                  <p className="mt-4">
                    Businesses usually manage inventory using systems such as ERP (Enterprise Resource Planning), WMS (Warehouse Management Systems), or IMS (Inventory Management Systems). These systems track stock levels, incoming goods, and outgoing products, and they are also used for financial reporting like profit and loss calculations.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-xl font-bold mb-3">Precise Inventory Counts</h3>
                  <p>
                    Maintaining accurate inventory is essential for smooth business operations. This is why regular physical counting (stock taking) is performed — to verify actual stock levels and correct outdated records.
                  </p>
                  <p className="mt-4">
                    Tap counters make this process faster and more reliable by allowing users to record each item instantly with a single tap. This reduces the chances of skipping items or double counting.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-xl font-bold mb-3">Reducing Errors and Saving Time</h3>
                  <p>
                    Manual counting can be slow, repetitive, and prone to mistakes — especially in large-scale environments like warehouses or stores. Tap counters significantly reduce these issues by simplifying the process into quick, repeatable actions.
                  </p>
                </section>

                <section className="bg-white/5 p-6 rounded-xl border border-white/10">
                  <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                    <Plus className="w-4 h-4 text-white/40" />
                    Additional Uses
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {[
                      'Inventory and stock tracking', 'Event attendance counting',
                      'Fitness and workout tracking', 'Productivity and task completion',
                      'Classroom participation', 'Scientific research',
                      'Traffic and crowd monitoring', 'Manufacturing defect counting',
                      'Meditation and breath tracking', 'Game scoring and competitions'
                    ].map(item => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-white/30 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <p className="text-center italic text-white/40 pt-8 border-t border-white/5">
                  Thank You for Using This Tap Counter. Enjoy using your tap counter — and happy counting!
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar / Tools */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 uppercase tracking-wider">
                Elliron Suite
              </h3>
              <ul className="space-y-3">
                {['Graphics Editor', 'Font Master', 'Gradient Lab', 'Asset Library', 'Brand Kit'].map((tool) => (
                  <li key={tool}>
                    <a href="#" className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 group transition-all border border-transparent hover:border-white/20">
                      <span className="text-white/70 group-hover:text-white">{tool}</span>
                      <Plus className="w-4 h-4 text-white/30 group-hover:text-white/60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="backdrop-blur-xl bg-black/20 rounded-2xl border border-white/5 p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 italic">Design Support</h3>
              <p className="text-white/50 text-xs mb-4 uppercase tracking-widest">
                Professional Graphics Solutions
              </p>
              <button className="w-full py-2.5 bg-white text-black rounded-xl font-black text-sm uppercase hover:bg-white/90 transition-all shadow-xl">
                Get In Touch
              </button>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-medium tracking-widest">
            © {new Date().getFullYear()} ELLIRON GRAPHICS — ALL STYLES RESERVED.
          </p>
          <div className="flex gap-6 text-xs text-white/30 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
