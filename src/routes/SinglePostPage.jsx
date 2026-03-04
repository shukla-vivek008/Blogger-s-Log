import { Link } from "react-router-dom";
import Img from "../components/Img.jsx";
import PostMenuActions from "../components/PostMenuActions.jsx";
import Search from "../components/Search.jsx";
import Comments from "../components/Comments.jsx";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl  font-semibold">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim saepe
            deleniti harum.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Deo</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut sint
            aperiam sed porro, vel in nesciunt cumque repudiandae error
            temporibus adipisci veritatis magni optio totam reprehenderit.
            Dolor, odit minima!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Img src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-7 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            consequuntur nobis inventore veniam modi sit ratione at. Tempore
            dolorum distinctio recusandae a ab optio ex dignissimos iste
            corrupti ipsum nulla quidem, alias officiis odit perferendis.
            Cupiditate, debitis? Modi, saepe nisi accusamus odio eveniet
            possimus obcaecati temporibus at, eum a magnam debitis culpa,
            quisquam soluta atque eligendi fugiat? Aperiam placeat vero ad ex
            vitae blanditiis voluptate odit ipsum tenetur a reprehenderit dolor
            ullam quasi laudantium, dignissimos quis exercitationem, voluptas
            impedit. Doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            ipsam asperiores dolorum quisquam ad nemo repellendus qui? Optio
            obcaecati cupiditate veniam iste magnam doloribus saepe sunt,
            dolorum nesciunt odit eum dignissimos earum dolore non dolores
            praesentium porro vel atque impedit facilis natus exercitationem
            debitis eius! Culpa natus in harum debitis? Laudantium sed adipisci
            quo amet asperiores molestiae sequi itaque! Sint perspiciatis
            quibusdam fuga, asperiores odio obcaecati expedita ipsum,
            exercitationem odit hic nam unde. Accusamus quia excepturi quae
            dignissimos tenetur praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            minima quas omnis, minus corrupti optio at veniam blanditiis quis
            earum, inventore, iure incidunt molestias! A libero quidem vitae
            voluptatem deserunt explicabo ullam temporibus. Excepturi, sapiente.
            Possimus sed, officia dolorem odit vel deleniti, iusto ipsa et quo
            labore, maxime quasi delectus enim perferendis. Fugit nam delectus
            amet quos fuga id minus rerum, veniam voluptatibus dolorum odit
            maxime similique sit natus excepturi fugiat ipsum dicta architecto
            nemo earum adipisci perferendis molestias veritatis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            consequuntur nobis inventore veniam modi sit ratione at. Tempore
            dolorum distinctio recusandae a ab optio ex dignissimos iste
            corrupti ipsum nulla quidem, alias officiis odit perferendis.
            Cupiditate, debitis? Modi, saepe nisi accusamus odio eveniet
            possimus obcaecati temporibus at, eum a magnam debitis culpa,
            quisquam soluta atque eligendi fugiat? Aperiam placeat vero ad ex
            vitae blanditiis voluptate odit ipsum tenetur a reprehenderit dolor
            ullam quasi laudantium, dignissimos quis exercitationem, voluptas
            impedit. Doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            ipsam asperiores dolorum quisquam ad nemo repellendus qui? Optio
            obcaecati cupiditate veniam iste magnam doloribus saepe sunt,
            dolorum nesciunt odit eum dignissimos earum dolore non dolores
            praesentium porro vel atque impedit facilis natus exercitationem
            debitis eius! Culpa natus in harum debitis? Laudantium sed adipisci
            quo amet asperiores molestiae sequi itaque! Sint perspiciatis
            quibusdam fuga, asperiores odio obcaecati expedita ipsum,
            exercitationem odit hic nam unde. Accusamus quia excepturi quae
            dignissimos tenetur praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
            minima quas omnis, minus corrupti optio at veniam blanditiis quis
            earum, inventore, iure incidunt molestias! A libero quidem vitae
            voluptatem deserunt explicabo ullam temporibus. Excepturi, sapiente.
            Possimus sed, officia dolorem odit vel deleniti, iusto ipsa et quo
            labore, maxime quasi delectus enim perferendis. Fugit nam delectus
            amet quos fuga id minus rerum, veniam voluptatibus dolorum odit
            maxime similique sit natus excepturi fugiat ipsum dicta architecto
            nemo earum adipisci perferendis molestias veritatis.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-12">
              <Img
                src="userImg.jpeg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Deserunt, et.
            </p>
            <div className="flex gap-2">
              <Link>
                <Img src="facebook.svg" />
              </Link>
              <Link>
                <Img src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
