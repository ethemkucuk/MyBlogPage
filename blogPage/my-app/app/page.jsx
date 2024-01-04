export default function Home() {
	return (
		<section class="relative bg-[url(https://t4.ftcdn.net/jpg/03/57/16/57/360_F_357165707_26OZ4FfKDoOWmlghEiUoY9WRe64Ffe9X.jpg)] bg-cover bg-center bg-no-repeat">
			<div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

			<div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
				<div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
					<h1 class="text-3xl font-extrabold sm:text-5xl animate-delay-0 animate-bounce">
						Let us find your
						<strong class="block font-extrabold text-teal-600 animate-ease-in-out animate-pulse">
							{" "}
							Favorite Blog Page.{" "}
						</strong>
					</h1>

					<p class="mt-4 max-w-lg sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div class="mt-8 flex flex-wrap gap-4 text-center">
						<a
							href="/"
							class="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto animate-ease animate-pulse"
						>
							Get Started
						</a>

						<a
							href="/"
							class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow hover:teal-rose-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto animate-ease animate-pulse"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
