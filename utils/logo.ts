export function logo(dark: boolean) {
  const fill = dark ? "#ffffff" : "#000000";

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
}
