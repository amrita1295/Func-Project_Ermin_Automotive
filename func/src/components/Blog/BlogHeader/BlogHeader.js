import React from "react";
import "./BlogHeader.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import blog1 from "../../../assets/blog-1.png";
import blog2 from "../../../assets/blog-2.png";
import blog3 from "../../../assets/blog-3.png";
import blog4 from "../../../assets/blog-4.png";
import blog5 from "../../../assets/blog-5.png";
import blog6 from "../../../assets/blog-6.png";
import blogArrow from "../../../assets/blog-arrow.png";
import blog7 from "../../../assets/blog-7.png";
import blog8 from "../../../assets/blog-8.png";
import blog9 from "../../../assets/blog-9.png";
import arrow from "../../../assets/Arrow.png";
import dot from "../../../assets/healthy-dot.png";
import dot2 from "../../../assets/about-dot-2.png";
import { Link } from "react-router-dom";

const BlogHeader = () => {
  const blogs = [
    {
      id: 1,
      header: "Benfits of weight lifting",
      img: blog7,
      description:
        "In terms of definition, lifting heavy weights is – “The lifting of heavyweights in a prescribed manner as an exercise or in athletic competition. However, it is much more than just an athletic activity.” Heavy weight lifting is seen as an activity that mostly helps people looking for gaining muscles or building muscle power but …",
    },
    {
      id: 2,
      header: "Why complete rest a solution to fix injuries",
      img: blog8,
      description:
        "Do you have a hectic schedule? Does your work keep you occupied all day long? And has it been difficult for you to stay in touch with your workouts? If so, then we have a perfect solution for you! Today we will talk about ways and easy methods to stay fit even though you are …",
    },

    {
      id: 3,
      header: "Benfits of weight lifting",
      img: blog9,
      description:
        "Whenever we suffer from a serious injury or severe pain, the first thing that strikes our mind is that we need rest. Over the years we have been conditioned to think that rest will solve all our problems, if we take complete rest, our body will get rid of all sorts of pains, fatigues and …",
    },
  ];

  return (
    <div className="blog-header-bg">
      <div className="ml-10 flex justify-start pt-24">
        <img src={dot} alt="" className="w-16" />
      </div>
      <div className="pt-24 pb-12 mt-[-160px]">
        <div className="grid lg:grid-cols-2 lg:mx-48 mx-24 md:grid-cols-2 grid-cols-1 md:gap-12 lg:gap-0 gap-0 items-center">
          <div className="flex gap-5">
            <div className="flex gap-4">
              <div>
                <PhotoProvider>
                  <PhotoView src={blog1}>
                    <img src={blog1} alt="" className="w-40 h-32 mb-3" />
                  </PhotoView>
                </PhotoProvider>

                <PhotoProvider>
                  <PhotoView src={blog3}>
                    <img src={blog3} alt="" className="w-40 h-80 mb-3" />
                  </PhotoView>
                </PhotoProvider>

                <PhotoProvider>
                  <PhotoView src={blog5}>
                    <img src={blog5} alt="" className="w-40 h-32" />
                  </PhotoView>
                </PhotoProvider>
              </div>

              <div>
                <PhotoProvider>
                  <PhotoView src={blog2}>
                    <img src={blog2} alt="" className="w-40 h-40 mb-3" />
                  </PhotoView>
                </PhotoProvider>
                
                <PhotoProvider>
                  <PhotoView src={blog4}>
                    <img src={blog4} alt="" className="w-40 h-52 mb-3" />
                  </PhotoView>
                </PhotoProvider>

                
                <PhotoProvider>
                  <PhotoView src={blog6}>
                    <img src={blog6} alt="" className="w-40 h-52" />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 md:mt-0">
            <h1 className="text-2xl lg:text-5xl md:text-3xl text[#000000] font-bold">
              What does <br /> fitness mean ?
            </h1>
            <p className="mt-8 text-[#000000]">
              In present times, there has been an increase in the number of
              people who are becoming conscious and cautious about their bodies.
              Now more than ever, a rising number of the urban population lead a
              sedentary lifestyle which has indeed created a greater need to
              find creative ways to keep the body moving, thus inculcating …
            </p>

            <div className="flex mt-8 justify-start items-center cursor-pointer">
              <div className="mr-4 font-bold">Read More</div>
              <div>
                <img src={blogArrow} alt="" className="w-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="ml-10 flex justify-end">
          <img src={dot2} alt="" className="w-16" />
        </div>
      </div>

      <div className="bg-blog">
        <div className="ml-10 flex justify-start">
          <img src={dot} alt="" className="w-16" />
        </div>
        <div className="lg:px-10 md:px-6 py-12 ">
          <div className="parent grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8 md:grid-cols-2">
            {blogs?.map((blog) => (
              <div className="p-6 rounded shadow-lg " key={blog.id}>
                <img
                  className="object-cover w-full mb-6 shadow-lg xl:h-80"
                  src={blog.img}
                  alt=""
                />
                <div className="flex justify-start">
                  <span className=" text-lg font-bold leading-none ">
                    {blog.header}
                  </span>
                </div>
                <div className="flex justify-end">
                  <div className="vl"></div>
                </div>

                <div className="text-justify mt-6">
                  <span className="font-bold"></span>
                  {blog.description}
                </div>

                <div className="mt-5 text-right">
                  <Link>
                    <button className="">
                      <img src={blogArrow} alt="" className="w-24" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <img src={arrow} alt="" />
          </div>

          <div className="ml-10 flex justify-end">
            <img src={dot} alt="" className="w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
