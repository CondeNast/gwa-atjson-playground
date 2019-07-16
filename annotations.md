## Annotations

The following annotations are available. Listed below each annotation are the props they make available. All are 
composable and have children.

#### Root
* children

#### [Blockquote](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/blockquote.ts)
* attribution?: string
* accreditation?: string
* inset?: string

#### Bold

#### [Callout](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/callout.ts) 
* type: string
* legacyType?: string
* [key: string]: string | undefined

#### [Ceros](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/ceros-embed.ts)
* url: string
* width: string
* height: string

#### [Clip](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/clip.ts)
* id: number | string
* inset?: 'left' | 'right' | 'center'
* size?: 'small' | 'medium' | 'large'
* caption?: CaptionSource
* width?: string
* height?: string
* aspectRatio?: string;#### Cne-embe

#### Code

#### [Embed](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-copilot-markdown/src/annotations/embed.ts)
* type: string
* uri: string
* width?: string
* height?: string
* caption?: CaptionSource
* [key: string]: any

#### FacebookEmbed

#### GiphyEmbed

#### [Heading](https://github.com/CondeNast/atjson/blob/latest/packages/%40atjson/source-commonmark/src/annotations/heading.ts)
* level: number

#### [HorizontalRule](https://github.com/CondeNast/atjson/blob/latest/packages/%40atjson/source-commonmark/src/annotations/horizontal_rule.ts)

#### Iframe-embed

#### [Image](https://github.com/CondeNast/atjson/blob/latest/packages/%40atjson/source-commonmark/src/annotations/image.ts)
* alt: string
* src: string
* title: string

#### InstagramEmbed

#### Italic

#### LineBreak

#### [Link](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-copilot-markdown/src/annotations/link.ts)
* href: string
* title: string
* [key: string]: string

#### List

#### [ListItem](https://github.com/CondeNast/atjson/blob/latest/packages/%40atjson/source-commonmark/src/annotations/list_item.ts)

#### [Meta](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/meta.ts)
* brand: string
* entityId?: string
* contentType?: string
* fieldName?: string

#### [Paragraph](https://github.com/CondeNast/atjson/blob/latest/packages/%40atjson/source-commonmark/src/annotations/paragraph.ts)

#### [Photo](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/photo.ts)
* id: number | string
* inset?: 'left' | 'right' | 'center'
* size?: 'small' | 'medium' | 'large'
* width?: string
* height?: string
* caption?: CaptionSource
* aspectRatio?: string

#### PinterestEmbed

#### [Pullquote](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/pullquote.ts)
* type?: string
* legacyType?: string
* inset?: string

#### [Section](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/section.ts)
#### [SmallCaps](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-verso/src/annotations/small-caps.ts)
#### [Strikethrough](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-copilot-markdown/src/annotations/strikethrough.ts)
#### [Subscript](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-copilot-markdown/src/annotations/subscript.ts)
#### [Superscript](https://github.com/CondeNast/copilot-atjson/blob/latest/packages/source-copilot-markdown/src/annotations/superscript.ts)
#### TwitterEmbed
#### Underline
#### YoutubeEmbed

