import React from 'react';
import { Clock, BookOpen, Circle, CheckCircle2 } from 'lucide-react';

function ChapterTopicList({ course }) {
  const courseLayout = course?.courseJson?.course;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 shadow-lg">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-600 bg-clip-text text-transparent mb-2">
            Chapters & Topics
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        {/* Chapters Container */}
        <div className="space-y-12">
          {courseLayout?.chapters?.map((chapter, index) => (
            <div key={chapter.chapterName} className="relative group">
              {/* Chapter Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 overflow-hidden transition-all duration-500">
                
                {/* Decorative Header Background */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                
                {/* Chapter Header */}
                <div className="relative p-8 pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                          Chapter {index + 1}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-2 leading-tight">
                        {chapter.chapterName}
                      </h3>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-2xl border border-blue-200/50 shadow-sm">
                      <Clock className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-semibold text-blue-700">
                        {chapter.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Topics Section */}
                <div className="px-8 pb-8">
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Circle className="w-5 h-5 text-purple-600" />
                      Learning Topics
                    </h4>
                    <div className="w-20 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                  </div>

                  {/* Topics with Enhanced Design */}
                  <div className="relative ml-4">
                    {/* Main Vertical Connector */}
                    <div className="absolute left-2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400 rounded-full opacity-60"></div>
                    
                    <div className="space-y-5">
                      {chapter.topics?.map((topic, topicIndex) => (
                        <div key={topic} className="relative group/topic">
                          {/* Topic Item */}
                          <div className="flex items-start gap-4 relative">
                            {/* Enhanced Circle Connector */}
                            <div className="relative flex-shrink-0 mt-1">
                              <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg border-2 border-white  transition-transform duration-300 relative z-10"></div>
                              {/* Pulse Effect */}
                              <div className="absolute inset-0 w-4 h-4 bg-purple-400 rounded-full animate-ping opacity-20"></div>
                            </div>
                            
                            {/* Topic Content */}
                            <div className="flex-1 bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-4 border border-slate-200/50 shadow-sm  hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group-hover/topic:translate-x-1">
                              <div className="flex items-center justify-between">
                                <span className="text-slate-700 font-medium leading-relaxed pr-4">
                                  {topic}
                                </span>
                                <CheckCircle2 className="w-5 h-5 text-green-500 opacity-0 group-hover/topic:opacity-100 transition-opacity duration-300 flex-shrink-0" />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter Separator */}
              {index < (courseLayout?.chapters?.length || 0) - 1 && (
                <div className="flex justify-center my-12">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Course Summary Footer */}
        {courseLayout?.chapters && courseLayout.chapters.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm rounded-3xl px-8 py-6 shadow-2xl border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {courseLayout.chapters.length}
                </div>
                <div className="text-sm font-medium text-slate-600 mt-1">Total Chapters</div>
              </div>
              
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-slate-300 to-transparent"></div>
              
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {courseLayout.chapters.reduce((total, chapter) => total + (chapter.topics?.length || 0), 0)}
                </div>
                <div className="text-sm font-medium text-slate-600 mt-1">Learning Topics</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChapterTopicList;