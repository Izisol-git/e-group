import React from "react";
import { Star } from "lucide-react";
import {useTranslation} from "react-i18next";

interface Testimonial {
    id: string;
    name: string;
    company: string;
    rating: number;
    testimonial: string;
    avatar: string;
}




const StarRating: React.FC<{ rating: number }> = ({ rating }) => {


    return (
        <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, index) => (
                <Star
                    key={index}
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
            ))}
        </div>
    );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    return (
        <div className="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 hover:shadow-lg transition-all duration-300">
            <div className="flex justify-center mb-4">
                <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-md"
                />
            </div>

            <div className="text-center mb-4">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-3">{testimonial.company}</p>
                <div className="flex justify-center">
                    <StarRating rating={testimonial.rating} />
                </div>
            </div>

            <div className="text-center">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{testimonial.testimonial}</p>
            </div>
        </div>
    );
};

const SuccessStories = () => {
    const {t} = useTranslation();
    const testimonials: Testimonial[] = [
        {
            id: "1",
            name: t('lawyerName'),
            company: t('companyRegistration'),
            rating: 5,
            testimonial:t('clientStory1'),
            avatar: "/placeholder.svg",
        },
        {
            id: "2",
            name: t('lawyerName'),
            company: t('companyRegistration'),
            rating: 5,
            testimonial:t('clientStory2'),
            avatar: "/placeholder.svg",
        },
        {
            id: "3",
            name: t('lawyerName'),
            company: t('companyRegistration'),
            rating: 5,
            testimonial:t('clientStory3'),
            avatar: "/placeholder.svg",
        },
    ];


    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
                    Mijozlarimiz Hikoyalari
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-red-500">
                    Huquqshinomiz haqida bilib oling
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </div>
    );
};

export default SuccessStories;