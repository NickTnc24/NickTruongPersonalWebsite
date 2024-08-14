import Image from "next/image";
import HeaderComponent from "@/app/_components/headerComponent";

export const metadata = {
    title: "About ME",
    description: "This is about ME",
};

function aboutMe(title: string, imgUrl: string, description: string){
  return(
    <div className="flex flex-row max-md:flex-col gap-y-5 justify-evenly items-center">
      <Image
          src = {imgUrl}
          alt = {title}
          width = {600}
          height = {600}
          className="about-picture-cards max-sm:w-auto max-sm:h-[400px] mx-10"
      />
      <div className="md:w-1/3 mx-10 max-md:w-10/12 about-picture-description">
        &emsp;&emsp;{description}
      </div>
    </div>
  )
}

function aboutMeReverse(title: string, imgUrl: string, description: string){
  return(
    <div className="flex flex-row-reverse max-md:flex-col gap-y-5 justify-evenly items-center">
      <Image
              src = {imgUrl}
              alt = {title}
              width = {600}
              height = {600}
              className="about-picture-cards max-sm:w-auto max-sm:h-[400px] mx-10"
          />
      <div className="md:w-1/3 mx-10 max-md:w-10/12 about-picture-description ">
        &emsp;&emsp;{description}
      </div>
    </div>
  )
}

export default function About(){
  return (
    <>
      <div className="min-h-screen flex flex-col gap-20 pt-20">
        <div className="flex flex-col text-header-size items-center">
          <div>Yo I&apos;m Nick and this is: </div>
          <div>Stuff I like to do</div>
        </div>
        <div>{aboutMe("marathon", "/_art/marathon.jpg", "I ran a marathon in 4 hours and 35 minutes in my sophomore year of college in the winter. I was inspired by David Goggins to start this. This run was the day before all of my final exams which was super unlucky timing.")}</div>
        <div>{aboutMeReverse("volleyball", "/_art/vb.JPEG", "I play lots of volleyball at Texas A&M University and this is my intramural team. I got invested into volleyball because of a volleyball anime called Haikyuu!")}</div>
        <div>{aboutMe("basketball", "/_art/basketball.jpeg", "This is my intramural basketball team. I have played basketball since 7th grade and my favorite NBA player is Stephen Curry.")}</div>
        <div>{aboutMeReverse("piano", "/_art/piano.JPG", "I started learning how to play piano over quarantine and I currently know how to play 7 pieces.")}</div>
        <div>{aboutMe("rockclimbing", "/_art/rockclimbing.jpg", "I started rock climbing in quarantine year and in this picture, I'm at Stone Co at Texas A&M University!")}</div>
        
      </div>
    </>
  );
}