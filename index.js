import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {readFileSync, writeFileSync} from 'fs';
import {join} from 'path';
import util from 'util';
import CopilotSource from '@condenast/atjson-source-copilot-markdown';
import VersoSource from '@condenast/atjson-source-verso';
import ReactRenderer from '@atjson/renderer-react';

const markdown = readFileSync(join(__dirname, 'article.md'), 'utf8');

// all of these are optional, if not present content is rendered as blank strings
const componentMap = {
  Root: ({children}) => <article>{children}</article>,
  Blockquote: ({children}) => <b>{children}</b>,
  Heading: ({children}) => <h1>{children}</h1>,
  Paragraph: ({children}) => <p>{children}</p>,
  Link: ({url, children}) => (
    <a href={url} target="_blank">
      {children}
    </a>
  ),
  List: ({children}) => <ul>{children}</ul>,
  ListItem: ({children}) => <li>{children}</li>,
  Photo: ({id}) => <img src="" alt={id} />,
};

const source = CopilotSource.fromRaw(markdown).convertTo(VersoSource);

// console.log(VersoSource.schema.map(a => a.type).sort());

// not strictly needed, but handy in case any unannotated markdown is provided
source.where(a => a.type === 'unknown').remove();

// console.log([...new Set(source.annotations.map(a => a.type))].sort());
// console.log(util.inspect(source, false, null, true));

const html = renderToStaticMarkup(ReactRenderer.render(source, componentMap));

writeFileSync(join(__dirname, 'index.html'), html);
