import React from "react";
import ReactStars from "react-stars";

const Detail = () => {
  return (
    <div className="p-4 flex flex-col md:flex-row items-center md:items-start justify-center mt-4 w-full">
      <img
        className="h-96 block md:sticky top-24"
        src="https://imgs.search.brave.com/kGa_9uIItbAGgOvvKFBO6nLkESK7voAo448-QCsThXs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFEdkRwMllEbkwu/anBn"
      />
      <div className="md:ml-4 ml-0  w-full md:w-1/2">
        <h1 className="text-3xl font-bold text-gray-400 ">
          Star Wars <span className="text-xl">(2014)</span>
        </h1>

        <ReactStars
          className=""
          size={20}
          half={true}
          value={4.5}
          edit={false}
        />
        <p className="mt-2">
          Star Wars is an American epic space opera media franchise created by
          George Lucas, which began with the eponymous 1977 film and quickly
          became a worldwide pop culture phenomenon. The franchise has been
          expanded into various films and other media, including television
          series, video games, novels, comic books, theme park attractions, and
          themed areas, comprising an all-encompassing fictional universe. Star
          Wars is one of the highest-grossing media franchises of all time.
          became a worldwide pop culture phenomenon. The franchise has been
          expanded into various films and other media, including television
          series, video games, novels, comic books, theme park attractions, and
          themed areas, comprising an all-encompassing fictional universe. Star
          Wars is one of the highest-grossing media franchises of all time.
        </p>
      </div>
    </div>
  );
};

export default Detail;
