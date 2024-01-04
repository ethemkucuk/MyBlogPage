const navbar = () => {
	return (
		<header class="bg-white">
			<div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
				<div class="flex h-16 items-center justify-between">
					<div class="md:flex md:items-center md:gap-12">
						<a class="block text-teal-600" href="/">
							<span class="sr-only">Home</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="36"
								height="36"
								fill="currentColor"
								class="bi bi-book"
								viewBox="0 0 16 16"
							>
								<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
							</svg>
						</a>
					</div>

					<div class="hidden md:block">
						<nav aria-label="Global">
							<ul class="flex items-center gap-6 text-sm">
								<li>
									<a
										class="text-gray-500 transition hover:text-gray-500/75"
										href="/"
									>
										{" "}
										About{" "}
									</a>
								</li>

								<li>
									<a
										class="text-gray-500 transition hover:text-gray-500/75"
										href="/blog"
									>
										{" "}
										Blog{" "}
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div class="flex items-center gap-4">
						<div class="sm:flex sm:gap-4">
							<a
								class="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
								href="/login"
							>
								Login
							</a>
						</div>

						<div class="block md:hidden">
							<button class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default navbar
