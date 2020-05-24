const pallete = {
	black: 'hsl(0, 0%, 0%)',
	white: 'hsl(0, 0%, 100%)',
	orange: 'hsl(15, 20%, 30%)',
	red: 'hsl(0, 100%, 50%)',
	darkPurple: "#6d7fcc",
	purple: "#7386d5",
	darkGreen: "#47748b"

}

const colours = {
	...pallete,
	background: pallete.white,
	sidebar: {
		text: pallete.white,
		background: pallete.purple,
		border: pallete.darkGreen,
	},
}

export default colours;
