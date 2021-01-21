
import './home.scss'
import React from "react";

import ToolCard from "../components/card";
import GenerateLogo from'../../assets/generate-logo.png';
import SketchToRenderLogo from'../../assets/s2r.png';
import {GENERATE, SKETCH_TO_RENDER } from "./home-const.js"

export default function Vizcom() {
    return (
        <div className = "tools">
            <div className = "tools-header">
                <h1>Tools</h1>
            </div>
            <div className = "nav row">
                <ToolCard 
                    link={GENERATE.link} 
                    name={GENERATE.name} 
                    description={GENERATE.description}
                    logo={GenerateLogo}
                />
                <ToolCard 
                    link={SKETCH_TO_RENDER.link} 
                    name={SKETCH_TO_RENDER.name} 
                    description={SKETCH_TO_RENDER.description}
                    logo={SketchToRenderLogo}
                />
            </div>
        </div>
    );
}