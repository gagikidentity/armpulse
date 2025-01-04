import React from 'react';
import { Clock, Users, BookOpen, Phone } from 'lucide-react';

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Մասնագիտական Դասընթացներ</h2>
          <p className="mt-4 text-xl text-gray-400">Տիրապետեք տեսանկարահանման արվեստին մեր ծրագրում</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative rounded-2xl bg-gray-900 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Փուլ 1։ Նկարահանման Հիմունքներ</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-amber-500 mr-2" />
                2 շաբաթ ինտենսիվ ուսուցում
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-amber-500 mr-2" />
                Փոքր խմբերով դասեր
              </li>
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 text-amber-500 mr-2" />
                Գործնական պարապմունքներ
              </li>
            </ul>
          </div>

          <div className="relative rounded-2xl bg-gray-900 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">Փուլ 2։ Հետնկարահանում</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-amber-500 mr-2" />
                2 շաբաթ մասնագիտացված մոնտաժ
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 text-amber-500 mr-2" />
                Պրոֆեսիոնալ ծրագրերի ուսուցում
              </li>
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 text-amber-500 mr-2" />
                Պորտֆոլիոյի ստեղծում
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Պատրա՞ստ եք Սկսել</h3>
                <p className="text-white/90">Կապվեք մեզ հետ՝ գրանցվելու համար</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a href="tel:077-79-99-24" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-amber-600 bg-white hover:bg-gray-50">
                  <Phone className="h-5 w-5 mr-2" />
                  077-79-99-24
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}