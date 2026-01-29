import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 4,
    name: "রহিম উদ্দিন",
    location: "Mirpur, Dhaka",
    rating: 5,
    text: "ঈদে গরু কেনার আগে আমরা অনেক জায়গায় গিয়েছিলাম, কিন্তু এখানকার গরুগুলো দেখতে অনেক সুন্দর ও পরিষ্কার‑পরিচ্ছন্ন ছিল। কর্মীদের আচরণ ছিল অত্যন্ত ভদ্র ও পেশাদার। সবাইকে এখানে গরু কেনার জন্য রেকমেন্ড করব।",
    image: "https://myimgs.org/storage/images/15943/WhatsApp Image 2026-01-17 at 11.jpeg"
  },
  {
    id: 5,
    name: "করিম মিয়া",
    location: "Ashulia, Dhaka",
    rating: 5,
    text: "আমার অভিজ্ঞতা অনুযায়ী, এই ফার্মে গরুর স্বাস্থ্য এবং যত্নের মান অনন্য। এখানে গ্রাহক সেবা এবং পরিষ্কার‑পরিচ্ছন্ন পরিবেশ সত্যিই প্রশংসার যোগ্য",
    image: "https://myimgs.org/storage/images/15944/WhatsApp Image 2026-01-17 at 11.jpeg"
  },
  {
    id: 6,
    name: "আব্দুল হামিদ",
    location: "Uttara, Dhaka",
    rating: 5,
    text: "ঈদুল আযহার জন্য গরু কেনার সময় এই ফার্মে এসেছি। গরুগুলোর স্বাস্থ্য, ফার্মের পরিচ্ছন্নতা এবং কর্মীদের শিষ্টাচার আমার প্রত্যাশার চেয়ে অনেক ভালো।",
    image: "https://myimgs.org/storage/images/15945/WhatsApp Image 2026-01-17 at 11.jpeg"
  },
  {
    id: 7,
    name: "সালমা খাতুন",
    location: "Dhanmondi, Dhaka",
    rating: 4,
    text: "অনলাইনে অর্ডার করার আগে একটু চিন্তা করছিলাম, তবে ঘি হাতে পেয়ে বোঝা গেল একেবারে খাঁটি। রান্নায় ব্যবহার করলে স্বাদ একদম গ্রামের ঘির মতো।",
    image: "https://myimgs.org/storage/images/15947/486290606_1875311366629265_8813656555452204772_n.jpg"
  },
  {
    id: 8,
    name: "নাজমুল হক",
    location: "Mohammadpur, Dhaka",
    rating: 5,
    text: "মাংসের মান একদম সন্তোষজনক। টুকরোগুলো ঠিকভাবে কাটা এবং প্যাক করা। অনলাইন অর্ডার সহজ, সেবা দ্রুত এবং পেশাদার",
    image: "https://myimgs.org/storage/images/15948/101798888_718291532331260_244095399592198144_n.jpg"
  },
  {
    id: 9,
    name: "রাশেদুল ইসলাম",
    location: "Gazipur, Dhaka",
    rating: 4,
    text: "মুরগি হাতে পেয়েছি, প্যাকেজিং ঠিকঠাক ছিল আর একদম তাজা। স্বাদও ভালো। একমাত্র সমস্যা, ডেলিভারি কিছুটা দেরিতে এসেছে।",
    image: "https://myimgs.org/storage/images/15949/WhatsApp Image 2026-01-17 at 11.jpeg"
  },
  {
    id: 10,
    name: "জাহিদ হাসান",
    location: "Savar, Dhaka",
    rating: 5,
    text: "আমি আসলে শুধু ফার্মটা দেখতে এসেছিলাম, কোনো কেনাকাট্টা করার পরিকল্পনা ছিল না। তবুও সবাই এত বন্ধুত্বপূর্ণ এবং আন্তরিক আচরণ করল ে ভালো লাগল।",
    image: "https://myimgs.org/storage/images/15950/480295734_1785700135560691_1029869246353887258_n.jpg"
  }
];

export function CustomerReviews() {
  return (
    <div className="py-4 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-3 md:px-4">
        <div className="text-center mb-4 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">What Our Clients Say</h2>
          <div className="w-16 md:w-24 h-1 bg-[#2E6B3F] mx-auto mb-3 md:mb-4"></div>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Real experiences from our valued customers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-4 md:p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative group"
            >
              <div className="absolute top-6 right-6 text-yellow-400 opacity-20">
                <Quote size={32} className="md:hidden" />
                <Quote size={48} className="hidden md:block" />
              </div>

              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#EAF4EC]"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"}
                  >
                    <Star
                      size={18}
                    />
                  </div>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed relative z-10">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}