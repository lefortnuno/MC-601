"use client";

import { useState } from "react";
import Template from "@/components/template/Template";
import Image from "next/image";
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

import "./contact.css";

export default function Contact() {
  return (
    <Template>
      <div className="contact-container">
        <div className="contact-content">
          <div className="left-side">
            <div className="address details">
              <div>
                <BsGeoAltFill className="contact-icons" />
              </div>
              <div className="topic">Address</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <div>
                <BsTelephoneFill className="contact-icons" />
              </div>
              <div className="topic">Phone</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <div>
                <BsEnvelopeFill className="contact-icons" />
              </div>
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>
              If you have any work from me or any types of quries related to my
              tutorial, you can send me message from here. It's my pleasure to
              help you.
            </p>
            <form action="#">
              <div className="input-box">
                <input
                  type="text"
                  name="fake-name"
                  placeholder="Enter your name"
                  autoComplete="off"
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  name="fake-email"
                  placeholder="Enter your email"
                  autoComplete="off"
                />
              </div>
              <div className="input-box message-box">
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Template>
  );
}
