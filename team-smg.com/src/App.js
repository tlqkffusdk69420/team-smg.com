import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Gift, Menu, X } from "lucide-react";

const ButtonComponent = ({ children, className = "", onClick, type = "button", ...props }) => (
  <motion.button
    type={type}
    onClick={onClick}
    className={`inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:pointer-events-none text-white rounded-full px-5 py-3 text-base shadow-lg ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    {...props}
  >
    {children}
  </motion.button>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white">
      {/* Header */}
      <header className="w-full fixed top-0 left-0 bg-white/90 backdrop-blur-md border-b z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-extrabold tracking-tight text-black-600">수원멀티짐</h1>
          <nav className="hidden md:flex space-x-6 text-sm font-medium">
            {[
              { name: "프로그램", href: "#programs" },
              { name: "시간표", href: "#schedule" },
              { name: "수강료", href: "#pricing" },
              { name: "혜택", href: "#benefits" },
              { name: "문의", href: "#contact" },
            ].map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                className="hover:text-red-600 transition"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <div className="hidden md:block">
            <a href="https://booking.naver.com/your-link" target="_blank" rel="noopener noreferrer">
              <ButtonComponent className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 text-sm">
                무료 체험하기
              </ButtonComponent>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
            >
              <button className="self-end mb-6" onClick={() => setMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-800" />
              </button>
              <nav className="flex flex-col space-y-4 text-lg font-medium">
                {[
                  { name: "프로그램", href: "#programs" },
                  { name: "시간표", href: "#schedule" },
                  { name: "수강료", href: "#pricing" },
                  { name: "혜택", href: "#benefits" },
                  { name: "문의", href: "#contact" },
                ].map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-red-600 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              <div className="mt-8">
                <a href="https://booking.naver.com/your-link" target="_blank" rel="noopener noreferrer">
                  <ButtonComponent className="bg-red-600 hover:bg-red-700 text-white rounded-full px-3 py-1.5 text-xs">
                    무료 체험하기
                  </ButtonComponent>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1594737625785-c74c1a0b15a4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            누구나 재미있게 배우는 <br /> MMA & 주짓수
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 text-base md:text-lg opacity-90"
          >
            수원멀티짐에서 함께 강해지세요
          </motion.p>
          <a href="https://booking.naver.com/your-link" target="_blank" rel="noopener noreferrer">
            <ButtonComponent className="bg-red-600 hover:bg-red-700 text-white rounded-full px-5 py-3 text-base">
              무료 체험 신청하기
            </ButtonComponent>
          </a>
        </motion.div>
      </section>

      {/* Programs */}
      <section id="programs" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12">주요 프로그램</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "MMA 종합격투기", desc: "타격과 그래플링 모두 잘할 수 있도록" },
            { title: "브라질리언 주짓수", desc: "체계적으로 배우는 실전적인 주짓수" },
            { title: "키즈 특공무술 & 주짓수", desc: "즐겁게 강해지는 키즈반" },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              className="rounded-2xl shadow p-8 text-center border bg-white transition"
            >
              <h4 className="text-xl font-semibold mb-3 text-red-600">{p.title}</h4>
              <p className="text-gray-600 mb-6">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
          <Clock className="w-7 h-7 text-red-600" />수업 시간표
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "성인반 오전", target: "중학생 이상", time: "10:30 ~ 11:30", desc: "월·수·금 MMA" },
            { title: "성인반 저녁1", target: "중학생 이상", time: "19:00 ~ 20:00", desc: "월·수·금 MMA 화·목 주짓수" },
            { title: "성인반 저녁2", target: "중학생 이상", time: "21:00 ~ 22:00", desc: "월·수·금 주짓수 화/목 MMA" },
            { title: "키즈반", target: "초등학생", time: "16:00 ~ 17:00 / 17:30 ~ 18:30", desc: "특공무술 & 주짓수" },
          ].map((c, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-green-50 p-6 shadow border"
            >
              <h4 className="text-lg font-semibold text-red-600 mb-2">{c.title}</h4>
              <p className="text-sm text-gray-700">대상: {c.target}</p>
              <p className="text-sm text-gray-700">시간: {c.time}</p>
              <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
          <Gift className="w-7 h-7 text-red-600" /> 등록 혜택
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "24시간 체육관 운영", desc: "정규 수업시간 외 자율운동 가능" },
            { title: "장기 등록 혜택", desc: "3개월 이상 등록 시 도복, 핸드랩, 마우스피스 3종 증정" },
            { title: "신규회원 특전", desc: "1회 무료 체험, 신규 회원 관장 초기 집중 케어" },
            { title: "키즈반 차량 운행", desc: "안전한 등하원 차량 운행 서비스 제공 (운행 지역 별도 문의)" },
          ].map((b, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-red-50 p-6 shadow border"
            >
              <h4 className="text-lg font-semibold text-red-600 mb-2">{b.title}</h4>
              <p className="text-sm text-gray-700">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="max-w-6xl mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 flex justify-center items-center gap-2">
          <CreditCard className="w-7 h-7 text-red-600" /> 수강료
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "성인반 주 3회 1타임", price: "12만원" },
            { title: "성인반 주 3회 올타임", price: "14만원" },
            { title: "성인반 주 5회 1타임", price: "15만원" },
            { title: "성인반 주 5회 올타임", price: "17만원" },
            { title: "키즈반 주 5회", price: "11만원" },
          ].map((p, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl bg-gray-50 p-6 shadow border"
            >
              <h4 className="text-lg font-semibold text-red-600 mb-2">{p.title}</h4>
              <p className="text-sm text-gray-900 font-bold mt-2">{p.price}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-12 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4 text-center"
        >
          <p className="mb-2 font-bold text-white text-lg">수원멀티짐</p>
          <p className="mb-2">경기 수원시 장안구 천천동 만석로19번길 11-7 306호 수원멀티짐 | 문의 010-2691-1257</p>
          <p className="text-sm">© 2025 Team SMG. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}