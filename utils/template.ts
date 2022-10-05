import { logo } from "./logo";

// prettier-ignore
const css = (dark: boolean) => `
    @import url('https://hop.io/fonts/gt-walsheim/stylesheet.css');

    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'GT Walsheim', sans-serif;
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
        padding: 0 8%;
        height: 100%;
    }

    .title {
        opacity: 0.9;
        font-size: 9em;
        font-weight: 700;
        line-height: 1.2;
    }

    .subtitle {
        margin-left: 4px;
        margin-top: 10px;
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
            <head>
                <meta charset="utf-8">
                <title>hop.io</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    ${css(dark)}
                </style>
            </head>

            <body>
                <div class="container">
                    <h1 class="title">${title}</h1>
                    ${subtitle ? `<h2 class="subtitle">${subtitle}</h2>` : ""}
                    <div class="footer">
                        ${logo(dark)}
                    </div>
                </div>
            </body>
        </html>
    `;
}
