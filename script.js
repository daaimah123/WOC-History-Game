let score = 0;
const images = [
    {
        name: "Rosa Parks", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Rosaparks.jpeg" ,
        description: "Born in Tuskegee, Alabama, in 1913. She grew up during a time of racial segregation and experienced firsthand the injustices of Jim Crow laws. From a young age, she was determined to challenge the status quo, and her activism began in her teenage years when she joined the NAACP. Best known for refusing to give up her seat on a segregated bus in Montgomery, Alabama. She became an icon of resistance and courage, and her actions sparked a bus boycott that lasted over a year. She was inspired by African-American leaders of the time and dedicated her life to the civil rights movement. "},
    {
        name: "Sojourner Truth", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Sojourner_Truth_CDV.jpeg",
        description: "Born into slavery in Ulster County, New York. At 29, she escaped with her infant daughter and from then on, she dedicated her life to advocating for the rights of both African Americans and women. In 1843, she joined the Northampton Association of Education and Industry, a utopian community in Massachusetts. Truth traveled throughout the country and gave speeches on the topics of abolitionism and women’s rights. Her powerful speech, 'Ain’t I a Woman?' was delivered in 1851 at the Women’s Convention in Akron, Ohio, and it resonated throughout the country. In 1864, she met with President Abraham Lincoln at the White House to discuss the future of African Americans after the Civil War. She died in 1883 in Battle Creek, Michigan."},
    {
        name: "Harriet Tubman", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Harriet-tubman-1860s-photo.jpeg" ,
        description: "Born into slavery around 1820 in Maryland. She escaped in 1849 and dedicated her life to helping free other slaves. She used the Underground Railroad to take hundreds of slaves to freedom and became known as the “Moses” of her people. She was also a noted abolitionist, humanitarian, and nurse in the Union Army during the Civil War. She died in 1913 and is remembered as one of the greatest heroes in American history. "},
    {
        name: "Mary McLeod Bethune", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Mary_McLeod_Bethune_with_a_Line_of_Girls_from_the_School_WDL4013.jpg" ,
        description: "She was an educator and civil rights leader who worked to improve the lives of African Americans. She founded a school for Black girls in 1904, which later became Bethune-Cookman University. In addition to her accomplishments in education and civil rights, Bethune was also involved in the women’s suffrage movement and the National Association of Colored Women, and was a personal advisor to First Lady Eleanor Roosevelt."},
    {
        name: "Fannie Lou Hamer", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Fannie_Lou_Hamer_1964-08-22.jpeg" ,
        description: "The youngest of twenty children and was raised in a family of sharecroppers, later becoming a sharecropper and plantation worker herself. In 1962, she was beaten and arrested for attempting to register to vote. After this experience, she devoted her life to the struggle for voting rights and civil rights. Hamer toured the country speaking out in support of civil rights, and also founded the Mississippi Freedom Democratic Party. "},
    {
        name: "Dorothy Height", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Dorothy_Height_13270321444.jpeg" ,
        description: "Born in Richmond, Virginia in 1912. She graduated from New York University with a degree in education and a master’s degree in educational psychology. After college, she worked as a social worker and became an active member of the National Council of Negro Women. Height was an influential civil rights leader and worked closely with Dr. Martin Luther King Jr. and other activists. She was an advocate for women’s rights, and was instrumental in the passage of the Equal Rights Amendment. Height also founded the National Black Family Reunion and was a recipient of the Presidential Medal of Freedom. "},
    {
        name: "Septima Poinsette Clark", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/septima_fitch.jpeg" ,
        description: "Born in Charleston, South Carolina, the daughter of two former slaves. She attended Avery Normal Institute and graduated in 1916. After college, she became a teacher. She was an active member of the NAACP and the National Association of Colored Women. She also worked with the Highlander Folk School, which was dedicated to providing education for African Americans. In 1953, she became director of the Citizenship Education Program, which trained African Americans to become active citizens. She died on December 15, 1987, leaving behind a legacy of civil rights activism and education."},
    {
        name: "Shirley Chisholm", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Shirley-Chisholm-for-President.jpeg" ,
        description: "Born in 1924 in Brooklyn, New York, to immigrant parents from Barbados. She first got into politics at 29, when she worked to elect the first Black judge in Brooklyn. She continued to volunteer for activist groups until she was elected to New York State Senate at 41. In 1968, she became the first Black woman elected to the US Congress and the only woman sworn in that year. In 1972, she became the first Black woman to run for President with the slogan: 'Unbought and Unbossed.' In addition to her political career, she was an outspoken advocate for education. She was a founding member of the National Women’s Political Caucus and served as the chair of the Congressional Black Caucus. She also founded the National Organization for Women. "},
    {
        name: "Pauli Murray", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Pauli_Murray_approx._1955.jpg" ,
        description: "At 30 years old, she was arrested for violating segregation laws in Virginia by sitting in the “whites-only” section of the bus. This incident, among others, sparked her passion for civil rights work. She enrolled at Howard University’s law school and graduated at the top of her class. Despite her outstanding academic achievements, she was denied the opportunity to do post-graduate work at Harvard, which she believed was due to her gender and race. This didn’t deter her, though, and she graduated from Yale Law School in 1965. Murray later wrote the influential book, States’ Laws on Race and Color, which served as an encyclopedia of all the states’ laws concerning race. In recognition of her pioneering work in gender discrimination, Ruth Bader Ginsburg named her as a coauthor in the Supreme Court Case Reed vs Reed."},
    {
        name: "Barbara Jordan", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2023/01/Barbara_Jordan_on_House_Judiciary_Committee_during_Watergate_impeachment_hearings.png" ,
        description: "She was the daughter of a Baptist preacher and the great-granddaughter of one of the last Black members of the Texas House of Representatives before the disenfranchisement of Black citizens under Jim Crow. She won a seat in the Texas Senate in 1966, becoming the first African-American state senator in Texas since 1883. In 1972, she was elected to the US House of Representatives, becoming the first woman to represent Texas, and also served on the House Judiciary Committee. She was also an accomplished public speaker, delivering powerful, memorable speeches in support of civil rights and justice. In 1994, she was awarded the Presidential Medal of Freedom."},
    {
        name: "Michelle Obama", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/05/MichelleObama.jpg" , 
        description: "She is a lawyer, writer, and former First Lady of the United States. She attended Princeton University and later Harvard Law School, then made the move to focus on public service. She served as the director of Public Allies in Chicago, which is a program that encourages young people to get involved in public service. Michelle is also famous for being the first Black First Lady of the United States. During her time as First Lady, she established the Let’s Move! Program to encourage healthy living and the Reach Higher Initiative to empower young people to take charge of their futures by continuing their education."},
    {
        name: "Naomi Osaka", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/NaomiOsaka-2.png",
        description: "She is a Japanese-American tennis player and social justice and mental health advocate. A few years after she was born in Japan, her family moved to the U.S., where her phenomenal tennis career began. In 2013, at just 16, Naomi started playing professionally, and in 2019 she was ranked number one in the world on two separate occasions. She decided to take a step back from playing in 2020 as a show of support for the Black Lives Matter protests going on at the time. The following year, she took another break, this time to put her mental health first. It was the first time a player withdrew from the French Open because of a non-physical injury. Her balance between playing the game she loves, advocating for social justice, and prioritizing self-care makes her an inspiration for Rebel Girls everywhere."},
    {
        name: "Yoko Ono", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/YokoOno-2.png",
        description: "She is a multifaceted artist, musician, and activist known for her avant-garde work. Her art has spanned various forms, including visual arts, music, and filmmaking. She played a significant role in the development of the 1960s Fluxus art movement and later gained international fame as a peace activist alongside John Lennon. Their famous “Bed-ins for Peace” events became iconic symbols of the anti-war movement. She has also been a strong advocate for women’s rights and social justice. Her boundary-pushing art and activism have inspired generations to think differently and work toward a more harmonious world."},
    {
        name: "Anna May Wong", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/AnnaMayWong-2.png",
        description: "Born in 1905 in Los Angeles, California, was a pioneering Chinese-American actor who broke barriers in Hollywood when opportunities for Asian performers were scarce. Despite facing racism and discrimination throughout her career, Anna persisted and became the first Asian-American actress to gain international recognition. Her talent and determination landed her roles in groundbreaking films like The Toll of the Sea (1922) and Shanghai Express (1932). Off-screen, she advocated for better representation and opportunities for Asian actors in the film industry. By challenging stereotypes and opening doors for future Asian performers, she left a lasting legacy in the world of cinema. Want to hear more about her?"},
    {
        name: "Vera Wang", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/VeraWang-2.png",
        description: "Born in 1949 in New York City, is an iconic fashion designer of Chinese descent who has revolutionized the bridal industry with her elegant and sophisticated designs. She started her career as a figure skater and journalist before discovering her true passion for fashion design. After working for Ralph Lauren, she opened her own bridal boutique in 1990 and quickly became a go-to designer for brides worldwide, as well as celebrities on the red carpet. Over the years, She has expanded her brand to include ready-to-wear clothing, accessories, and home goods. Her artistic vision, attention to detail, and relentless pursuit of excellence have made her a pioneer in the fashion world and a shining example to girls everywhere."},
    {
        name: "Malala Yousafzai", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/Malala-2.png", 
        description: "Born in 1997 in Mingora, Pakistan, is a courageous activist for girls’ education and the youngest-ever Nobel Peace Prize laureate. As a young girl, Malala defied the Taliban’s ban on education for girls by attending school and advocating for her right to learn. In 2012, she survived an assassination attempt by the Taliban and has since continued her advocacy on a global scale. Through her foundation, she works tirelessly to ensure all girls have access to 12 years of free, quality education. Her unwavering commitment to human rights and her fearless pursuit of justice show young girls how to stand up for what’s right."},
    {
        name: "Kalpana Chawla", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/Kalpana-2.png",
        description: "Born in 1962 in Karnal, India. She was a groundbreaking astronaut and engineer who became the first Indian-born woman to travel to space. Her passion for aerospace engineering led her to move to the United States, where she earned her master’s and PhD degrees before joining NASA. In 1997, she made history as a mission specialist on the Space Shuttle Columbia’s STS-87 mission. Tragically, during her second space mission in 2003, Kalpana and her fellow astronauts lost their lives in the Columbia disaster. Despite this, she remains an inspiration for millions of girls around the world, showing them that with hard work and determination, they can reach for the stars."},
    {
        name: "Tammy Duckworth", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/TammyDuckworth-2.png",
        description: "Born in Bangkok, Thailand, is an American politician and retired U.S. Army lieutenant colonel. In 2004, during her service as a helicopter pilot in Iraq, she lost both her legs when her helicopter was hit by a rocket-propelled grenade. She went on to become the first disabled woman elected to Congress, the first Asian-American woman to represent Illinois, and the first female double amputee in the Senate. As a senator, she fights for policies that support veterans, health care, and education."},
    {
        name: "Kim Ng", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/KimNG-2.png",
        description: "In 2020, she became the first woman and first Asian American in MLB history to be appointed as a general manager when she took the helm for the Miami Marlins. Her impressive career in baseball spans over 30 years, with roles with the Chicago White Sox, the New York Yankees, and the MLB Commissioner’s Office. Her dedication, strategic thinking, and perseverance have paved the way for other women and minority groups in the world of sports management. Her groundbreaking accomplishments serve as a powerful reminder for young girls that no dream is too big to achieve."},
    {
        name: "Murasaki Shikibu", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/Murasaki-Shikibu-2.png",
        description: "Talk about changing the world—Murasaki Shikibu literally invented the novel! Born in the 10th century in Kyoto, Japan, she was a highly influential Japanese writer, poet, and lady-in-waiting at the imperial court during the Heian period. She is best known for her literary masterpiece The Tale of Genji, which is considered the world’s first novel and one of the most significant works of Japanese literature. As a pioneering female writer in a male-dominated society, She serves as an enduring symbol of the power of women’s voices and the lasting influence of their contributions to the arts."},
    {
        name: "Noor Inayat Khan", 
        src: "https://explore.rebelgirls.com/wp-content/uploads/2024/06/Noor-Inayat-Khan-3.png",
        description: "An international woman of mystery! Born in 1914 in Moscow, Russia, and raised in the United Kingdom and France, was a brave World War II heroine and secret agent. The daughter of an Indian father and an American mother, Noor was a descendant of Indian royalty and a talented writer and musician. During World War II, she joined the British Special Operations Executive (SOE) and became the first female radio operator sent into occupied France to aid the French Resistance. Her courage, resourcefulness, and determination made her a valuable asset in the fight against the Nazis."},
];
const optionsContainer = document.getElementById("optionsContainer");
const gameImage = document.getElementById("gameImage");
const scoreDisplay = document.getElementById("scoreDisplay");
const startButton = document.getElementById("startButton");

function startGame() {
    gameStarted = true;
    document.getElementById("startButton").disabled = true;
    document.getElementById("exitButton").style.display = "inline-block";

    optionsContainer.innerHTML = ''; // Clear existing options
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
    gameImage.src = selectedImage.src;

    // Set the image description
    const imageDescriptionElement = document.getElementById("imageDescription");
    imageDescriptionElement.textContent = selectedImage.description;

    // Generate three incorrect options
    let incorrectOptions = [];
    while(incorrectOptions.length < 3) {
        let randomName = images[Math.floor(Math.random() * images.length)].name;
        if(randomName !== selectedImage.name && !incorrectOptions.includes(randomName)) {
            incorrectOptions.push(randomName);
        }
    }

    // Shuffle the array to randomly position the correct answer among the options
    let optionsArray = [...incorrectOptions, selectedImage.name];
    optionsArray.sort(() => Math.random() - 0.5);

    // Clear previous feedback message
    const feedbackMessageElement = document.getElementById("feedbackMessage");
    feedbackMessageElement.innerHTML = '';

    // Create buttons for each option
    optionsArray.forEach((optionText, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("optionButton");
        optionButton.textContent = optionText;
        
        optionButton.addEventListener("click", () => {
            if(optionText === selectedImage.name) {
                score++;
                updateScore();
                feedbackMessageElement.innerHTML = '<span class="correctFeedback">Correct!</span>';
                // Disable incorrect options
                optionsArray.forEach(option => {
                    if(option !== selectedImage.name) {
                        document.querySelector(`[data-option="${option}"]`).disabled = true;
                    }
                });
                setTimeout(() => startGame(), 1000); // Transition to next image after 1 second
            } else {
                feedbackMessageElement.innerHTML = '<span class="incorrectFeedback">Wrong! Try again.</span>';
                // Only disable the clicked button if it's incorrect
                if (optionText !== selectedImage.name) {
                    optionButton.disabled = true;
                }
            }
        });

        optionButton.dataset.option = optionText; // Store option text in data attribute for easy access
        optionsContainer.appendChild(optionButton);
    });
}

function resetGame() {
    gameStarted = false;
    document.getElementById("startButton").disabled = false;
    document.getElementById("exitButton").style.display = "none";
    // Reset game state here
    // For example, clear the game container and reset scores
    document.getElementById("gameContainer").innerHTML = '';
    // Any other necessary reset actions
}

// Example usage of resetGame()
document.getElementById("exitButton").addEventListener("click", function() {
    resetGame();
});

function enableButtons(enable) {
    const buttons = document.querySelectorAll('.optionButton');
    buttons.forEach(button => {
        button.disabled = !enable; // Enable all buttons if enable is true
    });
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}
// const startButton = document.getElementById("startButton");

// startButton.addEventListener('click', function() {
//     if (this.textContent.trim() === 'Start') {
//         startGame(); // Call your start game function
//         this.textContent = 'Restart'; // Change button text to Restart
//     } else {
//         window.location.reload(); // Reload the page to restart the game
//     }
// });


// Initialize game
startButton.addEventListener("click", () => {
    startGame();
});
