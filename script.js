    document.addEventListener('DOMContentLoaded', () => {
        const getFortuneBtn = document.getElementById('getFortuneBtn');
        const fortuneDisplay = document.getElementById('fortuneDisplay');
        const wishCard = document.getElementById('wishCard');
        const crackerAnimation = document.getElementById('crackerAnimation');
    
        const localFortunes = [
            "This year, one of your socks might finally come back from the laundry abyss. Don’t get too excited.",
            "This year will be the one where you half-heartedly try to fold a fitted sheet. Don’t act like you’re going to nail it.",
            "Brace yourself, this year you’ll talk to your plants more than to actual humans. They understand you better, anyway.",
            "This year, your internet will betray you at the worst possible time, probably during a Zoom call with your boss.",
            "Your hard work this year will pay off… in compliments from people who don’t actually matter.",
            "Prepare for exciting opportunities to nap more. You're really going to outdo yourself in this department.",
            "This year, your procrastination skills will reach new heights. Why do today what you can put off till tomorrow?",
            "An unexpected pizza delivery will brighten your day. It’s the universe saying, ‘I’m sorry for everything.’",
            "Your GPS will finally take you somewhere interesting… like the grocery store you’ve been avoiding for weeks.",
            "Fortune favors you this year, mostly in the form of coffee that’s almost, but not quite, strong enough.",
            "Your goals this year will align... in the sense that your coffee and Wi-Fi will both work at the same time.",
            "A joyful surprise awaits you – free dessert. You didn’t earn it, but hey, it’s free.",
            "This year, your dreams will mostly involve snacks, because obviously, that’s what life’s about.",
            "Positive energy will follow you, especially when you’re holding snacks. It’s science.",
            "This year, you will discover the true meaning of happiness: realizing it’s Friday at 3 p.m.",
            "Get ready, your sarcasm will reach legendary status this year. People will either love you or avoid eye contact.",
            "Adventure is calling… but you’ll send it straight to voicemail. You're busy doing literally anything else.",
            "Your smile will confuse people this year. Is it genuine? Are you plotting something? Who knows?",
            "This year holds the key to your success… which you’ll probably misplace in about five minutes.",
            "Prepare to shine… in those awkwardly-lit selfies that only your mom will like.",
            "This year, kindness will boomerang back to you… but expect a 5-10 day delay due to ‘processing.’",
            "The year ahead promises fewer typos, but probably more autocorrect fails. Technology, am I right?",
            "Expect good news – or at least fewer spam emails. Your inbox might be slightly less miserable.",
            "Your creativity will thrive this year, especially when you’re desperately avoiding actual work.",
            "This year, every challenge will build character… and provide a really good excuse.",
            "Success will chase you this year, but you’re faster. Except when it comes to your laundry. You’re never fast enough for that.",
            "Your lucky break will involve breaking something. Hopefully, it’s not your phone screen again.",
            "This year, your wildest idea will mostly confuse everyone. But hey, at least you tried.",
            "The year ahead promises love, laughter, and Wi-Fi that actually works… when it feels like it.",
            "Your boldness will pay off in the form of questionable fashion choices. Own it.",
            "This year, your positivity will annoy at least one grumpy person. You’re basically a human sunshine machine.",
            "Unexpected rewards will appear… after you lose the receipt and can’t return the thing you didn’t want.",
            "Your efforts will bear fruit… but mostly in the form of smoothies. Hope you like fruit pulp.",
            "Your journey this year will lead you somewhere unexpected… probably the fridge. Again.",
            "Exciting memories await… if you can remember them after that one party.",
            "This year, your potential will scare small children and pets. Don’t worry, it’s a good thing.",
            "Prepare to laugh… at your own jokes, because no one else will.",
            "This year, doors will open… but only the ones that say ‘Push.’ Maybe it’s a metaphor.",
            "Your heart will be full of joy… and probably caffeine. Because you’ll need it.",
            "A big win is coming… in the form of free guac. Let’s be honest, it’s all about the guac.",
            "This year, your ideas will impress… mostly your cat, who is a harsh critic.",
            "Your energy will attract weird situations and funny stories. Just don’t post them online.",
            "This year will be full of delightful surprises… mostly from that online order you forgot you made.",
            "You’ll inspire someone to try pineapple on pizza. You’re basically a trailblazer.",
            "Your patience this year will stretch… just like your sweatpants after too many snacks.",
            "This year, happiness will sneak up on you… like a puppy. Or maybe just your alarm clock.",
            "Expect this year to be slightly more organized… but only in the sense that you bought a planner.",
            "Your adventure begins this year… with a mysterious package from Amazon. No one knows what’s inside.",
            "Your luck will change this year… right after you lose a bet. So, yeah, that’s how it’s going to go.",
            "Your achievements this year will astonish… your past self. The future you is really going to disappoint you.",
            "Unexpected gifts will come… and you’ll probably pretend you wanted socks.",
            "Your positive outlook will shape this year… or at least confuse everyone who doesn’t understand sarcasm.",
            "Exciting twists await… probably from your tangled earbuds. It’s always the earbuds.",
            "Your talent will shine… but only at karaoke when everyone else is too drunk to care.",
            "Love and joy will bloom… in the garden you forgot about, and the plants are probably dead.",
            "Your friendships will deepen… over shared fries and passive-aggressive memes.",
            "This year will reward your perseverance… in winning completely pointless arguments.",
            "A surprise reunion is coming… probably in the frozen food aisle. It’s always the frozen food aisle.",
            "New hobbies will spark joy… and probably a slight injury. That’s how hobbies work, right?",
            "Your confidence will attract… more awkward situations. Wear it like a badge of honor.",
            "Expect happy accidents… like finding $5 in your jeans. Not life-changing, but still.",
            "Small wins will snowball… into slightly larger, yet equally clumsy wins.",
            "Your personal growth will flourish… but your houseplants will continue to judge you silently.",
            "An exciting journey awaits… mostly to the fridge, because that’s where the real adventure is.",
            "This year will remind you… that naps are absolutely essential to survival.",
            "Your bold choices this year will lead to questionable fashion trends. Embrace the chaos.",
            "Expect to dance… badly, but enthusiastically. That’s the key to success.",
            "Unexpected joys will catch you… mostly in traffic. But hey, it’s a joy, right?",
            "Your optimism will light the way… unless you forget to charge your flashlight.",
            "Prepare for countless smiles… even if they’re just at your own expense.",
            "Your kindness will ripple… mostly into free coffee. Don’t question it.",
            "The year ahead will feel… like a sitcom episode. Hopefully, you’re the main character.",
            "Luck will be your loyal companion… until it forgets where you live.",
            "Your best memories this year will involve… too much dessert. At least you’ll be happy.",
            "This year you’ll find love… in the bakery aisle. It’s meant to be.",
            "Prepare for romance… or at least one solid ‘like’ on your selfie. That’s basically the same thing.",
            "A surprise date is coming… with your couch and Netflix. It’s actually the best date ever.",
            "Love will bloom… but so will your need for personal space. That’s how relationships work, right?",
            "Get ready, someone will steal your heart… and probably your fries.",
            "Romance awaits… probably behind the last slice of pizza. It’s true love.",
            "Your soulmate is near… probably hiding behind the counter at your local coffee shop.",
            "Love is in the air… or maybe it’s just Wi-Fi signals. Either way, it’s something.",
            "Flirt boldly… but remember, eye contact with snacks is still your top priority."
        ];
    
  
    

        getFortuneBtn.addEventListener('click', () => {
            // Randomly select a fortune and display it
            const randomFortune = localFortunes[Math.floor(Math.random() * localFortunes.length)];
            fortuneDisplay.textContent = randomFortune;
    
            // Display the Happy New Year wish card (and keep it visible)
            wishCard.style.display = 'block';
    
            // Display the cracker/fireworks animation
            crackerAnimation.style.display = 'block';
    
            // Hide the cracker animation after 3 seconds
            setTimeout(() => {
                crackerAnimation.style.display = 'none';
            }, 3000); // 3000ms = 3 seconds
        });
    });