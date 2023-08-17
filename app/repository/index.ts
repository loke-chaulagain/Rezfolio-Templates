import axios from "axios";

export const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // Add any additional configuration options here
});

interface CreateResume {
  //Introduction
  section_1_heading: string;
  section_1_1_desc: string;

  //Experience
  section_2_heading: string;
  section_2_1_title: string;
  section_2_1_subTitle: string;
  section_2_1_desc: string;

  section_2_2_title: string;
  section_2_2_subTitle: string;
  section_2_2_desc: string;

  section_2_3_title: string;
  section_2_3_subTitle: string;
  section_2_3_desc: string;

  section_2_4_title: string;
  section_2_4_subTitle: string;
  section_2_4_desc: string;

  section_2_5_title: string;
  section_2_5_subTitle: string;
  section_2_5_desc: string;

  // Academic
  section_3_heading: string;
  section_3_1_title: string;
  section_3_1_subTitle: string;
  section_3_1_desc: string;

  section_3_2_title: string;
  section_3_2_subTitle: string;
  section_3_2_desc: string;

  section_3_3_title: string;
  section_3_3_subTitle: string;
  section_3_3_desc: string;
}

export class resumeRepository {
  // static get = async (id: number) => {
  //   try {
  //     const response = await AxiosInstance.get(`/resume/${id}`);
  //     return response;
  //   } catch (error) {
  //     console.error("Error while fetching:", error);
  //   }
  // };

  // static update = async (id: number, data: CreateResume) => {
  //   try {
  //     const response = await AxiosInstance.patch(`/resume/${id}`, data);
  //     return response;
  //   } catch (error) {
  //     console.error("Error while updating:", error);
  //   }
  // };


  static get = async (id: number) => {
    try {
      const response = await AxiosInstance.get("");
      return response;
    } catch (error) {
      console.error("Error while fetching:", error);
    }
  };

  static update = async (id: number, data: CreateResume) => {
    try {
      const response = await AxiosInstance.patch("", data);
      return response;
    } catch (error) {
      console.error("Error while updating:", error);
    }
  };
}
