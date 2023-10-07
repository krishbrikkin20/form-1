import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function Form1() {
    const [formData, setFormData] = useState({
        componyName: "",
        title: "",
        appLink: "",
        location: "select",
        jobType: "select",
        department: "select",
        choice: "",
        technology: []
    })

    // useEffect(() => {
    //     console.log(formData);
    // }, [formData])



    const handleCheckboxChange = () => {
        const checkBoxs = document.getElementsByName('chackBox')
        const checkedValue = []
        
        checkBoxs.forEach((checkBox) => {
            if(checkBox.checked){
                checkedValue.push(checkBox.value)
            }
        })

        setFormData({
            ...formData,
            technology: checkedValue,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await axios.post('http://127.0.0.1:3000/api/v1/form1', formData)
        const data = await res.data.data
        console.log(data);
    }
    const handleRadioChange = (e) => {
        setFormData({ ...formData, choice: e.target.value });
    };

    return (
        <>
            {/* Hello world */}
            <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">
                <form onSubmit={handleSubmit}>
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="company"
                                >
                                    Company Name*
                                </label>
                                <input
                                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="company"
                                    name="company"
                                    type="text"
                                    placeholder="Tutsplus"
                                    value={formData.componyName}
                                    onChange={(e) => setFormData({ ...formData, componyName: e.target.value })}
                                />
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="title"
                                >
                                    Title*
                                </label>
                                <input
                                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="title"
                                    type="text"
                                    placeholder="Software Engineer"
                                    value={formData.title}
                                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-full px-3">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="application-link"
                                >
                                    Application Link*
                                </label>
                                <input
                                    className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                    id="application-link"
                                    type="text"
                                    placeholder="http://...."
                                    value={formData.appLink}
                                    onChange={(e) => setFormData({ ...formData, appLink: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="location"
                                >
                                    Location*
                                </label>
                                <div>
                                    <select
                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                                        id="location"
                                        value={formData.location}
                                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    >
                                        <option value="select" disabled>Select</option>
                                        <option value="abuja">Abuja</option>
                                        <option value="enugu">Enugu</option>
                                        <option value="lagos">Lagos</option>
                                    </select>
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="job-type"
                                >
                                    Job Type*
                                </label>
                                <div>
                                    <select
                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                                        id="job-type"
                                        value={formData.jobType}
                                        onChange={(e) => setFormData({ ...formData, jobType: e.target.value })}
                                    >
                                        <option value="select" disabled>Select</option>
                                        <option value="full_time">Full-Time</option>
                                        <option value="part_time">Part-Time</option>
                                        <option value="internship">Internship</option>
                                    </select>
                                </div>
                            </div>
                            <div className="md:w-1/2 px-3">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="department"
                                >
                                    Department*
                                </label>
                                <div>
                                    <select
                                        className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"
                                        id="department"
                                        value={formData.department}
                                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                                    >
                                        <option value="select" disabled>Select</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="design">Design</option>
                                        <option value="customer_support">Customer Support</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-1/2 px-3 mb-6 w-full md:mb-0">
                                <label
                                    className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                    htmlFor="radio"
                                >
                                    Make the right choice *
                                </label>
                                <div>
                                    <div className="mx-auto max-w-sm text-center flex flex-wrap justify-center">
                                        <div className="flex items-center mr-4 mb-4">
                                            <input
                                                id="radio1"
                                                type="radio"
                                                name="choice"
                                                value="Best choice"
                                                checked={formData.choice === "Best choice"}
                                                onChange={handleRadioChange}
                                            />
                                            <label htmlFor="radio1" className="flex items-center cursor-pointer">
                                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
                                                Best choice
                                            </label>
                                        </div>
                                        <div className="flex items-center mr-4 mb-4">
                                            <input
                                                id="radio2"
                                                type="radio"
                                                name="choice"
                                                value="Second choice"
                                                checked={formData.choice === "Second choice"}
                                                onChange={handleRadioChange}
                                            />
                                            <label htmlFor="radio2" className="flex items-center cursor-pointer">
                                                <span className="w-4 h-4 inline-block mr-1 rounded-full border border-grey" />
                                                Second choice
                                            </label>
                                        </div>
                                    </div>
                                    <label
                                        className="uppercase tracking-wide text-black text-xs font-bold mb-2"
                                        htmlFor="radio"
                                    >
                                        Technology *
                                    </label>
                                    <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input
                                                    id="vue-checkbox"
                                                    type="checkbox"
                                                    name="chackBox"
                                                    value="vue_js"
                                                    defaultValue=""
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label
                                                    htmlFor="vue-checkbox"
                                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Vue JS
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input
                                                    id="react-checkbox"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    name="chackBox"
                                                    value="react"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label
                                                    htmlFor="react-checkbox"
                                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    React
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input
                                                    id="angular-checkbox"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    name="chackBox"
                                                    value="angular"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label
                                                    htmlFor="angular-checkbox"
                                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Angular
                                                </label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center pl-3">
                                                <input
                                                    id="laravel-checkbox"
                                                    type="checkbox"
                                                    defaultValue=""
                                                    name="chackBox"
                                                    value="laravel"
                                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    onChange={handleCheckboxChange}
                                                />
                                                <label
                                                    htmlFor="laravel-checkbox"
                                                    className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Laravel
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex">
                                <div className="md:w-full px-3">
                                    <button className="transition-all md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover: border-gray-500 hover:border-gray-100 rounded-full">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}