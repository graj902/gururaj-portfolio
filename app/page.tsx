import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gururaj Rathod | AWS DevOps Engineer",
	description: "Gururaj Rathod builds scalable cloud platforms on AWS with Kubernetes, EKS, Terraform, CI/CD, and platform engineering.",
};

const portraitUrl =
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1100&q=85";

function DownloadIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="size-4">
			<path d="M10 2.75v9.5m0 0 3.5-3.5M10 12.25l-3.5-3.5M3.5 13.75v2.5h13v-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	);
}

function GithubIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
			<path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.67-3.75-1.32-3.75-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.51 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.62 10.62 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.28-2.6 5.22-5.08 5.5.4.35.75 1.03.75 2.08v3.05c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
		</svg>
	);
}

function LinkedinIcon() {
	return (
		<svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="size-[18px]">
			<path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.34 18V9.7H5.57V18h2.77Zm-1.38-9.43a1.61 1.61 0 1 0-.02-3.22 1.61 1.61 0 0 0 .02 3.22ZM18.43 18v-4.55c0-2.44-1.3-3.58-3.03-3.58a2.61 2.61 0 0 0-2.36 1.3V9.7h-2.77c.04.9 0 8.3 0 8.3h2.77v-4.64c0-.25.02-.5.09-.68.2-.5.66-1.01 1.43-1.01 1.01 0 1.42.77 1.42 1.9V18h2.45Z" />
		</svg>
	);
}

export default function Home() {
	return (
		<main className="relative isolate min-h-screen overflow-hidden bg-[#080b10] text-white">
			<div
				aria-hidden="true"
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					backgroundImage:
						"radial-gradient(ellipse at 12% 18%, rgba(249,115,22,0.13), transparent 34%), radial-gradient(ellipse at 83% 38%, rgba(59,130,246,0.14), transparent 32%), radial-gradient(ellipse at 75% 88%, rgba(139,92,246,0.12), transparent 34%), linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
					backgroundSize: "auto, auto, auto, 64px 64px, 64px 64px",
					maskImage: "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
				}}
			/>

			<div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 sm:px-10 lg:px-16">
				<header className="flex items-center justify-between border-b border-white/[0.08] py-6">
					<a href="#home" className="group flex items-center gap-3" aria-label="Gururaj Rathod home">
						<span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] font-mono text-sm font-bold tracking-wide text-orange-300 transition duration-300 group-hover:border-orange-300/40 group-hover:bg-orange-300/10">
							GR
						</span>
						<span className="hidden text-xs font-semibold tracking-[0.2em] text-slate-300 sm:block">
							GURURAJ RATHOD
						</span>
					</a>
					<div className="flex items-center gap-2.5 rounded-full border border-emerald-300/15 bg-emerald-300/[0.06] px-3.5 py-2 text-[10px] font-medium tracking-[0.16em] text-emerald-200 sm:text-[11px]">
						<span className="relative flex size-2">
							<span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-50" />
							<span className="relative inline-flex size-2 rounded-full bg-emerald-300" />
						</span>
						OPEN TO OPPORTUNITIES
					</div>
				</header>

				<section id="home" className="grid flex-1 items-center gap-16 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-12">
					<div className="relative z-10 max-w-2xl animate-[fade-in-up_700ms_ease-out_both]">
						<div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-orange-300/20 bg-orange-300/[0.06] px-3.5 py-2 text-[11px] font-semibold tracking-[0.16em] text-orange-200 sm:text-xs">
							<span className="size-1.5 rounded-full bg-orange-300" />
							AWS CLOUD / DEVOPS
						</div>

						<p className="mb-3 text-base font-medium text-slate-400 sm:text-lg">
							Hello, I&apos;m <span className="text-slate-100">Gururaj Rathod</span>
						</p>
						<h1 className="max-w-[13ch] text-[clamp(3.2rem,7vw,6.6rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
							AWS DevOps <span className="bg-gradient-to-r from-orange-300 via-orange-200 to-amber-100 bg-clip-text text-transparent">Engineer</span>
						</h1>

						<h2 className="mt-7 max-w-xl text-xl font-medium leading-snug text-slate-200 sm:text-2xl">
							Building Scalable Cloud Platforms on AWS
						</h2>
						<p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
							I build dependable cloud foundations that help teams ship with confidence, scale smoothly, and spend less time managing infrastructure.
						</p>

						<p className="mt-7 max-w-xl text-xs font-medium leading-6 text-slate-500 sm:text-sm">
							Kubernetes <span className="px-1.5 text-orange-300">|</span> EKS <span className="px-1.5 text-blue-300">|</span> Terraform <span className="px-1.5 text-violet-300">|</span> CI/CD <span className="px-1.5 text-orange-300">|</span> Platform Engineering
						</p>

						<div className="mt-9 flex flex-wrap items-center gap-3">
							<a
								href="/Gururaj-Rathod-Resume.pdf"
								download
								className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-orange-400 px-5 text-sm font-semibold text-[#17100a] shadow-[0_8px_30px_rgba(249,115,22,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-orange-300 hover:shadow-[0_12px_34px_rgba(249,115,22,0.28)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-300"
							>
								<DownloadIcon />
								Download Resume
							</a>
							<a
								href="https://github.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="GitHub profile"
								className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
							>
								<GithubIcon />
							</a>
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noreferrer"
								aria-label="LinkedIn profile"
								className="inline-flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.045] text-slate-200 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-blue-300/40 hover:bg-blue-300/10 hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"
							>
								<LinkedinIcon />
							</a>
						</div>

						<div className="mt-12 flex items-center gap-4 border-t border-white/[0.08] pt-6">
							<div className="flex -space-x-2">
								<span className="size-7 rounded-full border-2 border-[#080b10] bg-orange-400/80" />
								<span className="size-7 rounded-full border-2 border-[#080b10] bg-blue-400/80" />
								<span className="size-7 rounded-full border-2 border-[#080b10] bg-violet-400/80" />
							</div>
							<p className="text-xs leading-5 text-slate-500">
								<span className="font-medium text-slate-300">Build. Automate. Scale.</span>
								<br />Cloud-native by design.
							</p>
						</div>
					</div>

					<div className="relative mx-auto w-full max-w-[470px] animate-[fade-in_900ms_ease-out_150ms_both] lg:ml-auto">
						<div aria-hidden="true" className="absolute -inset-8 rounded-[40%] bg-gradient-to-br from-orange-400/15 via-blue-400/10 to-violet-400/20 blur-3xl" />
						<div className="relative rounded-[28px] border border-white/[0.13] bg-white/[0.055] p-3 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-white/20">
							<div
								role="img"
								aria-label="Professional portrait placeholder"
								className="relative aspect-[4/4.7] overflow-hidden rounded-[20px] bg-[#171c26] bg-cover bg-[center_35%]"
								style={{
									backgroundImage: `linear-gradient(180deg, rgba(8,11,16,0.02) 40%, rgba(8,11,16,0.88) 100%), url("${portraitUrl}")`,
								}}
							>
								<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-transparent to-blue-400/10" />
								<div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-[#080b10]/45 px-3 py-2 text-[10px] font-semibold tracking-[0.16em] text-white/85 backdrop-blur-xl">
									<span className="size-1.5 rounded-full bg-orange-300" />
									CLOUD ENGINEERING
								</div>
								<div className="absolute inset-x-6 bottom-6">
									<p className="text-[10px] font-semibold tracking-[0.2em] text-orange-200">GURURAJ RATHOD</p>
									<p className="mt-2 text-2xl font-medium tracking-tight text-white sm:text-3xl">Infrastructure,</p>
									<p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">built for what&apos;s next.</p>
								</div>
							</div>
						</div>

						<div className="absolute -left-8 top-[27%] hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#111720]/85 p-3.5 shadow-2xl backdrop-blur-xl sm:flex lg:-left-12">
							<span className="grid size-10 place-items-center rounded-xl bg-blue-400/10 text-blue-300">
								<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5">
									<path d="M7 18.5h10a4 4 0 0 0 .42-7.98A5.5 5.5 0 0 0 6.7 9.2 4.7 4.7 0 0 0 7 18.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
							<span>
								<span className="block text-[10px] font-medium tracking-[0.12em] text-slate-500">PLATFORM</span>
								<span className="mt-0.5 block text-xs font-semibold text-slate-100">Cloud-native</span>
							</span>
						</div>

						<div className="absolute -right-4 bottom-[19%] flex items-center gap-2.5 rounded-xl border border-violet-300/15 bg-[#111720]/90 px-3.5 py-3 shadow-2xl backdrop-blur-xl sm:-right-8">
							<span className="size-2 rounded-full bg-violet-300 shadow-[0_0_12px_rgba(196,181,253,0.8)]" />
							<span className="text-xs font-medium text-slate-200">Automate the repeatable</span>
						</div>
					</div>
				</section>

				<footer className="flex items-center justify-between border-t border-white/[0.08] py-5 text-[10px] font-medium tracking-[0.12em] text-slate-600 sm:text-[11px]">
					  <span>GURURAJ RATHOD</span>
					<span className="hidden sm:block">DESIGNED FOR SCALE <span className="px-1.5 text-orange-300">/</span> POWERED BY AWS</span>
					<span className="sm:hidden">POWERED BY AWS</span>
				</footer>
			</div>
		</main>
	);
}
