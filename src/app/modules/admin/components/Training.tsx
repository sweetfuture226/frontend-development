/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";
import RecentVideo from "./RecentVideo";
import Progress from "./Progress";
import ImgVideo from "../assets/video.svg";
import ImgProgress from "../assets/progress.svg";

const Training = () => {
  const [dataVideo, setDataVideo] = useState<any>([
    {
      img: ImgVideo,
      title: "FMLS/Remine - Writing and Submitting Offers",
      percent: "40",
      hours: "3",
      date: "12/17/2021",
      time: "4:58 PM",
    },
    {
      img: ImgVideo,
      title: "Follow Up Boss - Stages and Smart Lists",
      percent: "90",
      hours: "10",
      date: "12/17/2021",
      time: "4:58 PM",
    },
    {
      img: ImgVideo,
      title: "FMLS/Matrix - How to Search Properties",
      percent: "65",
      hours: "5",
      date: "12/12/2021",
      time: "4:58 PM",
    },
    {
      img: ImgVideo,
      title: "Follow Up Boss - Custom Email Templates",
      percent: "80",
      hours: "1",
      date: "12/17/2021",
      time: "4:58 PM",
    },
  ]);

  const [dataProgress, setDataProgress] = useState<any>([
    {
      img: ImgProgress,
      title: "Onboarding Rev",
      percent: "40",
      hours: "3",
      date: "12/17/2021",
      time: "4:58 PM",
    },
    {
      img: ImgProgress,
      title: "Advanced Techniques",
      percent: "90",
      hours: "10",
      date: "12/17/2021",
      time: "4:58 PM",
    },
    {
      img: ImgProgress,
      title: "Special Stipulations and Special Situations",
      percent: "65",
      hours: "5",
      date: "12/12/2021",
      time: "4:58 PM",
    },
    {
      img: ImgProgress,
      title: "Contingencies &  Earnest Money Issues",
      percent: "80",
      hours: "1",
      date: "12/17/2021",
      time: "4:58 PM",
    },
  ]);

  return (
    <>
      <RecentVideo dataVideo={dataVideo} title="Recently Watched Videos" />
      <Progress dataVideo={dataProgress} title="Course Progress" />
    </>
  );
};

export default Training;
