import React from "react";
import image from "../img/image.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";

function Home() {
  return (
    <div
      style={{
        textAlign: "center",
        marginLeft: 200,
        marginRight: 200,
        fontWeight: "Semi Bold",
        fontSize: 25,
      }}

    >
      <h1>The “Push Pull Legs” PPL Workout Routine</h1>
      <br />
      <br />
      <p>
        <span style={{ color: "#fc5904", fontWeight: "bold" }}>
          The Push Pull Legs Routine (PPL)
        </span>{" "}
        is one of the most effective workout routines you can use to build
        muscle and gain strength. The push pull legs workout split is focused on
        the major muscle groups based around these movements. This article is on
        the basic PPL workout to get you started. We will add more focused PPL
        for Hypertrophy, Endurance and Strength and Powerlifting.
      </p>
      <br />
      <p>
        Regardless if you are experienced or just starting your road to fitness,
        we are going to give you the know how to build and plan your best 3-day
        or 6-day workout split for adding muscle and building strength.
      </p>
      <br />
      <p>
        The most effective mass and strength building routines revolve around
        well-established splits that use barbell exercises, including the best
        compound movements (squats, bench press, etc.), along with effective
        isolation movements (bicep curls, etc.). And yes, along with a great
        diet and cardio to control extra calories. But if you eat clean and
        control your calories, you’ll need a bit less cardio.
      </p>
      <img
        src={image3}
        alt= "image1"
        style={{
          width: 550,
          height: 250,
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "AUTO",
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <p>
        The 6-Day PPL is not easy and you’ll need some time to adjust to the
        increase in work (and likely more calories). This split is a perfect
        solution for those who have the time and energy to achieve what you can
        get from a PPL routine. If you have been doing a 4-day split, you can
        move to the PPL, or try a 5-Day Workout Split or another 5 day routine
        such as the PHAT Workout Routine.
      </p>
      <br />
      <h3 style={{ color: "#fc5904" }}>The Push Pull Legs Workout Split</h3>
      <br />
      <p>
        We typically recommend the PPL workout for those experienced lifters who
        have a good understanding of both compound and isolation movements, have
        had success with a 5-day workout split for 6 months or more and
        understand the importance of balanced nutrition and diet to support
        muscle building. Ideally its a 6-day workout routine, however, its so
        flexible it can become a 3, 4, 5 or 6-day workout routine depending on
        your schedule.
      </p>
      <br />
      <p>
        If you’re ready for a great way to program your training, you’ve
        probably seen the Push Pull Legs split, commonly called the PPL. This is
        a classic training method, and many athletes have found it flexible and
        effective. The Push Pull Legs split routine is a great way to structure
        your weekly workouts by dividing your training into three categories:
        Push Exercises (Chest, Shoulders and Triceps) Pull Exercises (Back,
        Bicep Legs (Quads, Hamstrings, Glutes, Calves).
      </p>
      <img
        src={image}
        alt= "image3"
        style={{
          width: 500,
          height: 250,
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "AUTO",
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <h3 style={{ color: "#fc5904" }}>Is the Push Pull Split for Me?</h3>
      <br />
      <p>
        There are many reasons to set up a new workout training split routine.
        While setting up your routine remember these 5 components (and be
        realistic).{" "}
      </p>
      <p>Consider the following:</p>
      <p>
        <ol>
          1) Your strength training experience (4, 5, 6-Day Routines, diet,
          etc.)
        </ol>
        <ol>
          2) Your personal goals (Reach a new PR, add muscle and strength, etc.){" "}
        </ol>
        <ol>3) Your weekly schedule (Available days to train, etc.)</ol>
        <ol>4) Age and ability to rest and recover (20’s, 40’s, etc.)</ol>
        <ol>5) Injuries or other health concerns. (Shoulder, back, etc.)</ol>
      </p>
      <img
        src={image2}
        alt= "image2"
        style={{
          width: 500,
          height: 300,
          textAlign: "center",
          display: "block",
          marginLeft: "auto",
          marginRight: "AUTO",
          marginTop: 20,
          marginBottom: 20,
        }}
      />
    </div>
  );
}

export default Home;
