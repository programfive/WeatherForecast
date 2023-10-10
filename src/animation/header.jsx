import { useMediaQuery } from "../hooks/useMediaQuery";
export function animationHeader() {
	const isMedium = useMediaQuery("(max-width: 1280px)");	
	const buttonVariants = {
		hover: {
			scale: 1.05,
			rotate: -4,
			transition: {
				duration: 0.2,
			},
		},
		tap: {
			scale: 0.95,
		},
	};
	 const DropVariant = {
		open: {
			opacity: 1,
			transition: {
				duration: 0.3,
			},
		},
		closed: {
			opacity: 0,
	
			transition: {
				duration: 0.3,
			},
		},
	};
	
	 const DropMediumVariant = isMedium
		? {
				hidden: {
					y: "100vh",
					opacity: 0.5,
				},
	
				visible: {
					y: "0",
					opacity: 1,
					transition: {
						type: "spring",
						stiffness: 600,
						damping: 30,
					},
				},
				exit: {
					y: "-100vh",
					opacity: 0,
				},
			}
		: {
				hidden: {
					opacity: 1,
				},
			};
	 const SearchContentVariant = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 },
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 },
		},
	};
	 const SearchItemsVariant = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
		hover: {
			scale: 1.05,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
		tap: {
			scale: 0.95,
			transition: {
				duration: 0.2,
				ease: "easeInOut",
			},
		},
	};
	return {
		buttonVariants,
		DropVariant,
		DropMediumVariant,
		SearchContentVariant,
		SearchItemsVariant
	}
	
}

