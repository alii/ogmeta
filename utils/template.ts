import { readFileSync } from "fs";

const rglr = readFileSync(`${__dirname}/../fonts/Inter-Regular.woff2`).toString("base64");
const bold = readFileSync(`${__dirname}/../fonts/Inter-Bold.woff2`).toString("base64");

// prettier-ignore
const css = (dark: boolean) => `
    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: normal;
        src: url(data:font/woff2;charset=utf-8;base64,${rglr}) format('woff2');
    }

    @font-face {
        font-family: 'Inter';
        font-style:  normal;
        font-weight: bold;
        src: url(data:font/woff2;charset=utf-8;base64,${bold}) format('woff2');
    }

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        height: 100vh;
        width: 100vw;

        ${dark ? `
            background: black;
            color: white;
        ` : `
            background: white;
            color: black;
        `}
    }

    .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 8%;
        height: 100%;
    }

    .title {
        opacity: 0.9;
        font-size: 9em;
        font-weight: 700;
        line-height: 1.2;
    }

    .subtitle {
        font-size: 2.8rem;
        opacity: 0.5;
        font-weight: 500;
        line-height: 1;
    }

    .badge {
        background-color: #dcfce7;
        color: #166534;
        font-weight: 500;
        font-size: 1.8rem;
        padding: 0.8rem 2rem;
        width: 220px;
        text-align: center;
    }

    .footer {
        display: flex;
        align-items: center;
        position: absolute;
        bottom: 75px;
    }

    .footer span {
        font-size: 2.5rem;
        opacity: 0.8;
        font-weight: 700;
        line-height: 1;
        margin-left: 20px;
    }
`;

export function getHtml({
	title,
	subtitle,
	dark = true,
}: {
	title: string;
	subtitle?: string;
	dark: boolean;
}) {
	return `
        <!DOCTYPE html>
        <html>
            <meta charset="utf-8">
            <title>hop.io</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                ${css(dark)}
            </style>
            <body>
                <div class="container">
                    <h1 class="title">${title}</h1>
                    ${subtitle ? `<h2 class="subtitle">Position at ${subtitle}</h2>` : ""}
                    <div class="footer">
                        <img alt="logo" src="https://cdn.onboarded.app/assets/logo.png" width="85" height="85"/>
                        <span>hop.io</span>
                    </div>
                </div>
            </body>
        </html>
    `;
}
