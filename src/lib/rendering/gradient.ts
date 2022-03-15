
function changeGradient(ctx, colours: string[] = ["#00cdac", "#02aab0"]) {
	const gradient = ctx.createLinearGradient(0, 15, 0, 0);
	let interval = 1;
	colours.forEach(colour => {
		gradient.addColorStop(interval, colour);
		interval -= 1 / (colours.length - 1);
	})
	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 20, 20);
}

export default changeGradient;