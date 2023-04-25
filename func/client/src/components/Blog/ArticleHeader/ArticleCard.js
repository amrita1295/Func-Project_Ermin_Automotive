import React from 'react';
import { Link } from 'react-router-dom';
import blogArrow from "../../../assets/blog-arrow.png";

const ArticleCard = ({article}) => {

    const { id, header } = article


    return (

        <div>
            <div className="p-6 rounded shadow-lg " key={article.id}>
                <img
                  className="object-cover w-full mb-6 shadow-lg xl:h-80"
                  src={article.img1}
                  alt=""
                />
                <div className="flex justify-start">
                  <span className=" text-sm font-bold leading-none ">
                    {article.header}
                  </span>
                </div>
                <div className="flex justify-end">
                  <div className="vl"></div>
                </div>

                <div className="text-justify mt-6">
                  <span className="font-bold"></span>
                  {article.desc.slice(0, 250) + '...'} 
                </div>

                <div className="mt-5 text-right">
                  <Link to={`/article/${id}`}>
                    <button className="">
                      <img src={blogArrow} alt="" className="w-24" />
                    </button>
                  </Link>
                </div>
              </div>
        </div>
    );
};

export default ArticleCard;