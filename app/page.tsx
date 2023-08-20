"use client";
import { useEffect, useRef, useState } from "react";
import { resumeRepository } from "./repository";
import { Notification } from "@mantine/core";
import { Button } from "@mantine/core";
import LoadingSkeleton from "./components/LoadingSkeleton";
import { ICreateResume } from "./types/resume";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Page(this: any) {
  // console.log(process.env.NEXT_PUBLIC_API_URL)
  const [value, setValue] = useState("");
  console.log();

  const [resumeData, setResumeData] = useState<any>();
  const [inputData, setInputData] = useState<ICreateResume>({
    //Introduction
    section_1_heading: "",
    section_1_1_desc: "",

    //Experience
    section_2_heading: "",
    section_2_1_title: "",
    section_2_1_subTitle: "",
    section_2_1_desc: "",

    section_2_2_title: "",
    section_2_2_subTitle: "",
    section_2_2_desc: "",

    section_2_3_title: "",
    section_2_3_subTitle: "",
    section_2_3_desc: "",

    section_2_4_title: "",
    section_2_4_subTitle: "",
    section_2_4_desc: "",

    section_2_5_title: "",
    section_2_5_subTitle: "",
    section_2_5_desc: "",

    // Academic
    section_3_heading: "",
    section_3_1_title: "",
    section_3_1_subTitle: "",
    section_3_1_desc: "",

    section_3_2_title: "",
    section_3_2_subTitle: "",
    section_3_2_desc: "",

    section_3_3_title: "",
    section_3_3_subTitle: "",
    section_3_3_desc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await resumeRepository.get(35);
      if (res?.data) {
        setResumeData(res.data);
        setInputData(res.data);
      }
    };

    fetchData();
  }, []);

  const [showToast, setShowToast] = useState<boolean>(false);
  const [saving, setSaving] = useState<boolean>(false);

  const handleSave = async () => {
    setSaving(true);
    const res = await resumeRepository.update(35, inputData);
    setShowToast(true);
    setSaving(false);
    if (res?.status === 200) {
      setResumeData(inputData);
      setEditModeActive(!editModeActive);
    }
    setTimeout(() => {
      setShowToast(false);
    }, 1000);
  };

  const handleInputChange = (field: keyof ICreateResume, value: string) => {
    setInputData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const [editModeActive, setEditModeActive] = useState<boolean>(false);
  const handleEditMode = () => {
    setEditModeActive(!editModeActive);
  };

  const contentEditableRef: any = useRef(null);
  useEffect(() => {
    if (editModeActive) {
      contentEditableRef.current.focus();
    }
  }, [editModeActive]);

  return (
    <section className="flex justify-center min-h-screen  pt-20 lg:pt-24 pb-20 px-3 lg:px-0 ">
      <Notification
        className={`fixed right-2 top-16 w-96 transition-opacity  ${showToast ? "opacity-100 " : "opacity-0 "}`}
        color="green"
        withCloseButton={false}
        title="Saved Successfully"
        onClick={() => setShowToast(false)}
      />

      <div className="fixed flex justify-end  top-4 z-50 w-full px-3 lg:px-0 lg:w-6/12  ">
        <div
          className="  "
          style={{ marginLeft: "100%" }}>
          {editModeActive && resumeData && (
            <Button
              onClick={handleSave}
              className="bg-primary-500 hover:bg-primary-500 "
              size="xs"
              compact>
              {saving ? "Saving" : "Save"}
            </Button>
          )}

          {resumeData && !editModeActive && (
            <Button
              onClick={handleEditMode}
              className="bg-primary-500 hover:bg-primary-500 "
              size="xs"
              compact>
              Edit
            </Button>
          )}
        </div>
      </div>

      <div className="wrapper lg:w-6/12   ">
        {/* <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
        /> */}

        {resumeData ? (
          <div className="flex flex-col gap-8 ">
            <div className="Introduction______________________Section">
              <div className="flex items-center justify-between">
                {/* <div
                  ref={contentEditableRef}
                  className="global_input text-3xl text-gray-600 font-semibold "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_1_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_1_heading }}
                /> */}

                {/* <ReactQuill
                className="w-full"
                  ref={contentEditableRef}
                  theme="snow"
                  value={inputData.section_1_heading}
                  onChange={(content) => handleInputChange("section_1_heading", content)}
                /> */}

<ReactQuill 
 ref={contentEditableRef}
          // theme={this.state.theme}
          onChange={(content) => handleInputChange("section_1_heading", content)}
          value={inputData.section_1_heading}
          modules={Page.modules}
          formats={Page.formats}
          bounds={'.app'}
          // placeholder={this.props.placeholder}
         />
         
              </div>


              <div
                  // ref={contentEditableRef}
                  className="global_input  text-gray-600 p-0 m-0 "
                  // contentEditable={editModeActive}
                  // onBlur={(e: any) => handleInputChange("section_1_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_1_heading }}
                />

              {/* <div
                className="global_input desc"
                contentEditable={editModeActive}
                onBlur={(e: any) => handleInputChange("section_1_1_desc", e.target.textContent)}
                dangerouslySetInnerHTML={{ __html: inputData.section_1_1_desc }}
              /> */}
            </div>

            <div className="Experience______________________Section flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div
                  className="global_input text-3xl text-gray-600 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_heading }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_1_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_1_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold opacity-90 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_1_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_1_subTitle }}
                />

                <div
                  className="global_input  desc"
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_1_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_1_desc }}
                />
              </div>

              <div className="Experience___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_2_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_2_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold opacity-90  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_2_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_2_subTitle }}
                />

                <div
                  className="global_input  desc"
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_2_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_2_desc }}
                />
              </div>

              <div className="Experience___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_3_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_3_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold opacity-90  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_3_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_3_subTitle }}
                />

                <div
                  className="global_input  desc"
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_2_3_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_2_3_desc }}
                />
              </div>
            </div>

            <div className="Academic______________________Section flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div
                  className="global_input text-3xl text-gray-600 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_heading", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_heading }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_1_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_1_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_1_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_1_subTitle }}
                />

                <div
                  className="global_input text-gray-500 text-xs font-semibold opacity-95 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_1_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_1_desc }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_2_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_2_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_2_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_2_subTitle }}
                />

                <div
                  className="global_input text-gray-500 text-xs font-semibold opacity-95 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_2_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_2_desc }}
                />
              </div>

              <div className="Academic___Item flex flex-col gap-1">
                <div
                  className="global_input text-gray-600 opacity-95 font-semibold  "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_3_title", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_3_title }}
                />

                <div
                  className="global_input text-gray-500 text-sm font-semibold   "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_3_subTitle", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_3_subTitle }}
                />

                <div
                  className="global_input text-gray-500 text-xs font-semibold opacity-95 "
                  contentEditable={editModeActive}
                  onBlur={(e: any) => handleInputChange("section_3_3_desc", e.target.textContent)}
                  dangerouslySetInnerHTML={{ __html: inputData.section_3_3_desc }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
          </div>
        )}
      </div>
    </section>
  );
}


/* 
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Page.modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean'],
    [{ 'color': ['red','green'] }, { 'background': [] }], 
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Page.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
]

/* 
 * PropType validation
 */
// Page.propTypes = {
//   placeholder: PropTypes.string,
// }

/* 
 * Render component on page
 */