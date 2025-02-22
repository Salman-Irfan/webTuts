import React from 'react'
import HeroSection from '../views/homeViews/HeroSection'
import Testimonials from '../views/homeViews/Testimonials'
import Featured from '../views/homeViews/Featured'
import DynamicTestimonials from '../views/homeViews/DynamicTestimonials'
import TopSellerWrapper from '../views/homeViews/TopSellerWrapper'
import TopSellerCard from '../views/homeViews/TopSellerCard'

const Home = () => {
    return (
        <>
            <HeroSection />
            <Testimonials />
            <Featured />
            <DynamicTestimonials name={`salman`} message={`som positive keywordse`} />
            <DynamicTestimonials name={`faizan`} message={`some neutral aragraphp`} />
            <DynamicTestimonials name={`atif`} message={`abc`} />
            <DynamicTestimonials name={`hassnain`} message={`xyz`} />
            <DynamicTestimonials name={`haris`} message={`some random message`} />

            <TopSellerWrapper>
                <TopSellerCard title={`atta`} price={650} discount={`10%`} />
                <TopSellerCard title={`cooking oil`} price={650} discount={`10%`} />
                <TopSellerCard title={`nurppur`} price={650} discount={`10%`} />
                <TopSellerCard title={`nuts`} price={650} discount={`10%`} />
            </TopSellerWrapper>
        </>
    )
}

export default Home