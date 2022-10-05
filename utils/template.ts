const logo = (dark: boolean) => {
	const fill = dark ? '#ffffff' : '#000000';

	return `
		<svg xmlns="http://www.w3.org/2000/svg" style="opacity: 0.75;" width="85px" height="85px" viewBox = "0 0 160 100" >
			<g data-name="Layer 2">
				<g data-name="Layer 1">
					<path
						d="M30,20a30.09,30.09,0,0,0-10,1.71V0H0V80H20V50a10,10,0,0,1,20,0V80H60V50A30,30,0,0,0,30,20Z"
						fill="${fill}"
					/>
					<path
						d="M80,20a30,30,0,1,0,30,30A30,30,0,0,0,80,20Zm0,40A10,10,0,1,1,90,50,10,10,0,0,1,80,60Z"
						fill="${fill}"
					/>
					<path
						d="M130,20a30,30,0,0,0-30,30v50h20V78.29A30,30,0,1,0,130,20Zm0,40a10,10,0,1,1,10-10A10,10,0,0,1,130,60Z"
						fill="${fill}"
					/>
				</g>
			</g>
		</svg>
	`;
};

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

export function getHtml({title, subtitle, dark = true}: {title: string; subtitle?: string; dark: boolean}) {
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
                    ${subtitle ? `<h2 class="subtitle">${subtitle}</h2>` : ''}
                    <div class="footer">
                        ${logo(dark)}
                    </div>
                </div>
            </body>
        </html>
    `;
}
