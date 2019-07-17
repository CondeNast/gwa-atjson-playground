import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import util from "util";
import CopilotSource from "@condenast/atjson-source-copilot-markdown";
import VersoSource from "@condenast/atjson-source-verso";
import ReactRenderer from "@atjson/renderer-react";

const markdown = readFileSync(join(__dirname, "article.md"), "utf8");

// all of these are optional, if not present content is rendered as blank strings
const componentMap = {
  Root: ({ children }) => <article>{children}</article>,
  Blockquote: ({ children }) => (
    <blockquote>
      <h3>
        <i>{children}</i>
      </h3>
    </blockquote>
  ),
  Bold: ({ children }) => <b>{children}</b>,
  Italic: ({ children }) => <i>{children}</i>,
  Heading: ({ children, level }) =>
    level <= 3 ? <h2>{children}</h2> : <h3>{children}</h3>,
  Paragraph: ({ children }) => <p>{children}</p>,
  Pullquote: ({ children }) => (
    <div
      style={{
        borderLeft: "4px #ccc solid",
        marginLeft: "40px",
        paddingLeft: "16px"
      }}
    >
      <p>{children}</p>
    </div>
  ),
  Link: ({ url, children }) => (
    <a href={url} target="_blank">
      {children}
    </a>
  ),
  List: ({ children, type }) =>
    type === "numbered" ? <ol>{children}</ol> : <ul>{children}</ul>,
  ListItem: ({ children }) => <li>{children}</li>,
  Image: ({ url, description }) => (
    <>
      <img alt="" src={url} style={{ width: "100%" }} />
      <i>{description ? description.content : ""}</i>
    </>
  ),
  Photo: ({ url, description }) => (
    <>
      <img alt="" src={url} style={{ width: "100%" }} />
      <i>{description ? description.content : ""}</i>
    </>
  ),
  LineBreak: <br />,
  Section: ({ children }) => (
    <section>
      <hr />
      {children}
    </section>
  ),
  // annotations that are not converting:
  SmallCaps: ({ children }) => <u>{children}</u>,
  Subscript: ({ children }) => <sub>{children}</sub>,
  Superscript: ({ children }) => <sup>{children}</sup>,
  Strikethrough: ({ children }) => <s>{children}</s>
};

const source = CopilotSource.fromRaw(markdown).convertTo(VersoSource);

// console.log(VersoSource.schema.map(a => a.type).sort());
// console.log("copilot", CopilotSource.schema.map(a => a.type).sort());

// not strictly needed, but handy in case any unannotated markdown is provided
source.where(a => a.type === "unknown").remove();

//console.log([...new Set(source.annotations.map(a => a.type))].sort());

// console.log(util.inspect(source, false, null, true));

const html = renderToStaticMarkup(ReactRenderer.render(source, componentMap));

const atJson = JSON.stringify(source);
writeFileSync(join(__dirname, "index.html"), html);
