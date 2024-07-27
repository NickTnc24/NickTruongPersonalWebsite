import Image from "next/image";

export const metadata = {
    title: "About ME",
    description: "This is about ME",
};

export default function About(){
    return (
        <div className="min-h-screen flex flex-col gap-10">
          <div className="flex flex-col text-header-size items-center">
            <div>Yo I&apos;m Nick and this is: </div>
            <div>Stuff I like to do</div>
          </div>
          <div className="flex flex-row max-sm:flex-col gap-y-5 justify-evenly items-center">
            <Image
                src = "/_art/marathon.jpg"
                alt = "marathon"
                width = {450}
                height = {400}
                className="about-picture-cards"
            />
            <div className="sm:w-1/3 max-sm:w-10/12 about-picture-description">
              &emsp;&emsp;I ran a marathon in 4 hours and 35 minutes in my sophomore year of college in the winter.
            </div>
          </div>
          <div className="flex flex-row-reverse max-sm:flex-col gap-y-5 justify-evenly items-center">
            <Image
                    src = "/_art/vb.JPEG"
                    alt = "vb"
                    width = {450}
                    height = {400}
                    className="about-picture-cards"
                />
            <div className="sm:w-1/3 max-sm:w-10/12 about-picture-description">
              &emsp;&emsp;I play lots of volleyball at Texas A&M University and this is the team that I played with.
            </div>
          </div>
          <div className="flex flex-row max-sm:flex-col gap-y-5 justify-evenly items-center">
            <Image
                src = "/_art/basketball.jpeg"
                alt = "basketball"
                width = {450}
                height = {400}
                className="about-picture-cards"
            />
            <div className="sm:w-1/3 max-sm:w-10/12 text-center about-picture-description">
              &emsp;&emsp;I love basketball and this is my intramural basketball team.
            </div>
          </div>
          <div className="flex flex-row-reverse max-sm:flex-col gap-y-5 justify-evenly items-center">
            <Image
                    src = "/_art/piano.JPG"
                    alt = "I'm playing piano!"
                    width = {450}
                    height = {400}
                    className="about-picture-cards"
                />
            <div className="sm:w-1/3 max-sm:w-10/12 text-center about-picture-description">
              &emsp;&emsp;I love to play the piano. I started learning how to play piano over quarantine and I currently know how to play 7 pieces.
            </div>
          </div>
        </div>
      );
}