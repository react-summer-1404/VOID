import { useState } from 'react';

const ProductFilter=()=> {

  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 5000000],
    level: '',
    teacher: '',
    sortBy: 'newest'
  });

  const [showCategories, setShowCategories] = useState(false);
  const [activeFilters, setActiveFilters] = useState(0);

  const categories = [
    { id: 1, name: 'برنامه‌نویسی', count: 45 },
    { id: 2, name: 'طراحی', count: 32 },
    { id: 3, name: 'بازاریابی', count: 28 },
    { id: 4, name: 'زبان', count: 15 }
  ];

  const levels = ['مقدماتی', 'متوسط', 'پیشرفته'];
  const teachers = ['استاد احمدی', 'استاد محمدی', 'استاد رضایی'];


  //filter machine//

  const handleCategoryChange = (categoryName) => {
    const newCategory = filters.category === categoryName ? '' : categoryName;
    setFilters({ ...filters, category: newCategory });
    updateActiveFilters({ ...filters, category: newCategory });
  };

  const handleLevelChange = (level) => {
    const newLevel = filters.level === level ? '' : level;
    setFilters({ ...filters, level: newLevel });
    updateActiveFilters({ ...filters, level: newLevel });
  };

  const handleTeacherChange = (teacher) => {
    const newTeacher = filters.teacher === teacher ? '' : teacher;
    setFilters({ ...filters, teacher: newTeacher });
    updateActiveFilters({ ...filters, teacher: newTeacher });
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setFilters({ ...filters, priceRange: [0, value] });
    updateActiveFilters({ ...filters, priceRange: [0, value] });
  };

  // //

  const handleSortChange = (sortValue) => {
    setFilters({ ...filters, sortBy: sortValue });
  };

  const updateActiveFilters = (currentFilters) => {
    let count = 0;
    if (currentFilters.category) count++;
    if (currentFilters.level) count++;
    if (currentFilters.teacher) count++;
    if (currentFilters.priceRange[1] < 5000000) count++;
    setActiveFilters(count);
  };

  const resetFilters = () => {
    setFilters({
      category: '',
      priceRange: [0, 5000000],
      level: '',
      teacher: '',
      sortBy: 'newest'
    });
    setActiveFilters(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex gap-4">
        
        {/* Sidebar - Filters */}
        <div className="w-[280px]">
          
          {/* Filter Header */}
          <div className="bg-white rounded-lg p-4 mb-3">
            <div className="flex justify-between items-center pb-4 border-b border-gray-200">
              <h2 className="text-sm font-medium text-gray-800">فیلترها</h2>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold bg-purple-100 text-purple-600 px-2 py-1 rounded">
                  {activeFilters}
                </span>
                {activeFilters > 0 && (
                  <button
                    onClick={resetFilters}
                    className="text-xs text-red-500 hover:text-red-700"
                  >
                    پاک کردن
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="bg-white rounded-lg p-4 mb-3">
            <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
              دسته‌بندی
            </label>
            <div className="relative">
              <div
                onClick={() => setShowCategories(!showCategories)}
                className="border border-gray-300 rounded-lg p-2 text-sm text-gray-700 cursor-pointer flex justify-between items-center hover:bg-gray-50"
              >
                <span>{filters.category || 'انتخاب کنید'}</span>
                <span className="text-xs">▼</span>
              </div>
              
              {showCategories && (
                <ul className="absolute top-full left-0 w-full mt-1 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <label
                        className={`block px-4 py-2 text-sm cursor-pointer hover:bg-teal-500 hover:text-white ${
                          filters.category === cat.name ? 'bg-orange-500 text-white' : ''
                        }`}
                        onClick={() => {
                          handleCategoryChange(cat.name);
                          setShowCategories(false);
                        }}
                      >
                        {cat.name} ({cat.count})
                      </label>
                    </li>
                  ))}
                </ul>
              )}
              
            </div>
          </div>

          {/* Level Filter */}
          <div className="bg-white rounded-lg p-4 mb-3">
            <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
              سطح دوره
            </label>
            <div className="space-y-2">
              {levels.map((level) => (
                <label
                  key={level}
                  className={`block px-4 py-2 text-sm cursor-pointer rounded-lg transition ${
                    filters.level === level
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-50 hover:bg-teal-500 hover:text-white'
                  }`}
                  onClick={() => handleLevelChange(level)}
                >
                  {level}
                </label>
              ))}
            </div>
          </div>

          {/* Teacher Filter */}
          <div className="bg-white rounded-lg p-4 mb-3">
            <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
              مدرس
            </label>
            <div className="space-y-2">
              {teachers.map((teacher) => (
                <label
                  key={teacher}
                  className={`block px-4 py-2 text-sm cursor-pointer rounded-lg transition ${
                    filters.teacher === teacher
                      ? 'bg-orange-500 text-white'
                      : 'bg-gray-50 hover:bg-teal-500 hover:text-white'
                  }`}
                  onClick={() => handleTeacherChange(teacher)}
                >
                  {teacher}
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div className="bg-white rounded-lg p-4 mb-3">
            <label className="text-xs font-medium text-gray-700 block mb-3 pr-2">
              محدوده قیمت
            </label>
            <div className="px-2">
              <div className="text-center text-lg font-bold text-purple-600 mb-4">
                {filters.priceRange[1].toLocaleString('fa-IR')} تومان
              </div>
              <input
                type="range"
                min="0"
                max="5000000"
                step="100000"
                value={filters.priceRange[1]}
                onChange={handlePriceChange}
                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>۰</span>
                <span>۵,۰۰۰,۰۰۰</span>
              </div>
            </div>
          </div>

        </div>

        {/* Main Content */}
        <div className="flex-1">
          
          {/* Sort Bar */}
          <div className="bg-white rounded-lg p-4 mb-4 flex justify-between items-center">

            <div className="relative">

              <select
                value={filters.sortBy}
                onChange={(e) => handleSortChange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 cursor-pointer appearance-none pr-10"
              >

                <option value="newest">جدیدترین</option>
                <option value="popular">محبوب‌ترین</option>
                <option value="cheapest">ارزان‌ترین</option>
                <option value="expensive">گران‌ترین</option>

              </select>

              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none">▼</span>
            </div>

            <div className="text-sm text-gray-600">
              نمایش <span className="font-bold">۱۲۰</span> دوره
            </div>
          </div>

          {/* Active Filters Display */}
          {activeFilters > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-700">فیلترهای فعال:</span>
                {filters.category && (
                  <span className="bg-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    {filters.category}
                    <button onClick={() => handleCategoryChange(filters.category)} className="text-red-500">×</button>
                  </span>
                )}
                {filters.level && (
                  <span className="bg-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    {filters.level}
                    <button onClick={() => handleLevelChange(filters.level)} className="text-red-500">×</button>
                  </span>
                )}
                {filters.teacher && (
                  <span className="bg-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    {filters.teacher}
                    <button onClick={() => handleTeacherChange(filters.teacher)} className="text-red-500">×</button>
                  </span>
                )}
                {filters.priceRange[1] < 5000000 && (
                  <span className="bg-white px-3 py-1 rounded-full text-xs flex items-center gap-2">
                    تا {filters.priceRange[1].toLocaleString('fa-IR')} تومان
                    <button onClick={() => handlePriceChange({ target: { value: 5000000 }})} className="text-red-500">×</button>
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition">

                <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl h-40 mb-3"></div>
                <h3 className="font-medium text-gray-800 mb-2">دوره نمونه {item}</h3>
                <p className="text-sm text-gray-600 mb-3">توضیحات کوتاه دوره</p>

                <div className="flex justify-between items-center">

                  <span className="text-lg font-bold text-purple-600">۱,۲۰۰,۰۰۰ تومان</span>

                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition">
                    مشاهده
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>

      </div>



      {/* Debug Info */}
      {/* <div className="max-w-7xl mx-auto mt-8 bg-gray-800 text-white p-4 rounded-lg text-xs">
        <div className="font-bold mb-2">فیلترهای انتخاب شده:</div>
        <pre>{JSON.stringify(filters, null, 2)}</pre>
      </div> */}


    </div>
  );
}

export default ProductFilter;