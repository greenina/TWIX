# DP3 : Low-fidelity Prototyping

## POV

---

We revised our POV based on the feedback of DP2

- POV

  **"Newcomers of eco-friendly product consumption"**

  needs to

  "be supported in **continuously being motivated** to the environment **without being discouraged by personal gain**(price, functionality, etc)"

  because it

  "eventually leads them to **take themselves as a true green consumer** who thinks of eco-friendly factor in everyday life". 

    

## Tasks

---

1. Get hints which implies the item's eco-friendliness and speak them out. 

2. Put three items that you think are eco-friendly and one item that you think is not, to the wish list. 

   - During this task, the user gets to face where they have to select their companion and name it as well as login&sign up. 

3. Make your companion's state to "healthy"

   - We planned the users to watch the "growth" of the companion from a baby to a grown up. However, there were limitations of implementing so many status of the companion, so we chose to show the health change of the companion which also aligns our purpose.

   
### Prototyping Tool
**Figma**

1. Effective real-time collaboration

2. Executable links of prototype available

3. Wizard of Oz available

4. Free and easy to use

:link:[Prototype link](https://www.figma.com/proto/g8gPyFM8M4lgUNJEruVq8E/DP3?node-id=18%3A4&scaling=min-zoom&page-id=0%3A1)

**[Representative Screen Shots]**

![https://ifh.cc/g/chIPWc.jpg](https://ifh.cc/g/chIPWc.jpg)



![https://ifh.cc/g/Ej1bdX.jpg](https://ifh.cc/g/Ej1bdX.jpg)

![https://ifh.cc/g/KXHXPC.jpg](https://ifh.cc/g/KXHXPC.jpg)

![https://lh6.googleusercontent.com/-F9siOkTbkGMKlr6nG7Ea0KaFVQeNyy_oXOOii3b9i7iHe5z0hNZoL7PcZBBtA_Np8pXeOujRDtFF_Ss1U4mPtyBmOatu2Gq1w5aTpf_ew](https://lh6.googleusercontent.com/-F9siOkTbkGMKlr6nG7Ea0KaFVQeNyy_oXOOii3b9i7iHe5z0hNZoL7PcZBBtA_Np8pXeOujRDtFF_Ss1U4mPtyBmOatu2Gq1w5aTpf_ew)

### Design Choice

**Selection between several options**

- New page rather than Modal page of login/sign up page
    Switching into a completely different page is more impactful feedback that the screen could give about the user's actions than the modal window
    
    ​	![https://ifh.cc/g/kWF8X2.jpg](https://ifh.cc/g/kWF8X2.jpg)
    
- Wish list instead of Cart
    We want to implement the concept of cart, but since it addresses personal credit information, we concluded it was out of the range we can deal with.
    
- Term selection : Login instead of Sign in
    People are often confused about the terms ‘Sign in’ and ‘Sign up’, so we used ‘Login’ instead of ‘Sign in’.
    
    ![https://ifh.cc/g/dAUILV.jpg](https://ifh.cc/g/dAUILV.jpg)
    
- Way of removing from wish list : Clicking filled heart
    There are several reasons and sub choices regarding this design choice

    ![https://lh4.googleusercontent.com/ZfU0uEVXuylXrJGHvUuOu5VTM97Cqct-0RAEQBUhCg6YFkjXHOYU8p2pAjFukH2rLy3-hVnYKAYDlG2ZxD97EgMbQzHmyxey0ZZoN94d](https://lh4.googleusercontent.com/ZfU0uEVXuylXrJGHvUuOu5VTM97Cqct-0RAEQBUhCg6YFkjXHOYU8p2pAjFukH2rLy3-hVnYKAYDlG2ZxD97EgMbQzHmyxey0ZZoN94d)

    1. **Reversibility** vs Confirmation
        Removing like(heart) of an item doesn’t immediately make the item be deleted from wish list. We allowed “undo” of deleting likes to be easy in case the user cancel the likes by mistake. Rather than confirmation of whether to remove the heart, we chose reversibility.
    2. Icon selection: **Heart** vs trashcan vs X
        - Since we chose reversibility instead of confirmation, heart icon was the most appropriate. You can click unfilled heart to make it filled again(heart can have 2 modes) while trashcan and X button has only one status. 
        - Moreover, heart icon represents user's will of the item most directly. 

- Include non-eco friendly products as well as eco-friendly products
  - Our target user is who wants to be motivated steadily in eco-friendly consumption.
  - However, since user's criteria of product selection has not been yet established, agonizing between contribution to the environment and personal gain, it would give a critical impact by showing the difference between two products at the same time
    - *Solution : Just show eco-friendly products only in the mainpage(get rid of non-eco friendly ones), Show both products in each side in each category page*



- 2 ways of accessing to lowest price shopping mall
    There is "Go to Buy" btn as well as shopping mall list(with access btn) sorted by price

    There are 2 types of people
    - Want to buy from lowest price shopping mall
    - Consider more factors other than price(i.e. Want to buy item from shopping mall where they usually use)
    These needs can vary by person, item, etc. 

    This design choice is to support both needs.
    
- Logo & <span style="color:green">Concept color</span>(Green)
    
    ![https://ifh.cc/g/upuX4Q.jpg](https://ifh.cc/g/upuX4Q.jpg)

    We used a sprout as a shape of I, which contains the meaning of ‘I green’ and ‘I grow’.
    Also, the shape that human hand is holding a bit of soil with sprout shows that we can save nature.
    
    The color green is typically used a lot with a metaphor ‘eco-friendly’.
    
- Breadcrumb

    ![https://ifh.cc/g/cdc3jx.jpg](https://ifh.cc/g/cdc3jx.jpg)

    Breadcrumb provides information about where the user is currently on the site’s hierarchy in a compact form while tree widget costs more space and complexity. 

- Graphic effects added on the product image when mouse overlay depending on eco-friendliness of the product, instead of switching the image.
    Many shopping sites provide 2 thumbnail images for each product(switch when mouse overlay, etc)
    Our intend : show the eco-friendly degree of product visually 
    If image switches by mouse overlay(e.g. dirty sea picture → clean sea picture)it would disturb users to see the original image(hidden below new picture of environment) they wants to see.
    Instead of picture, we added graphic effects which doesn't inturrupt users from checking the original product picture. 


- Used GIF/icons to provide information(how the item contributes to environment) visually/intuitively by using GIF
    **GIF**
    - Real photos & gradual change -> enhance belief, level of reality
    - Gradual change -> show what their effort can result. 
    **Icons**
    The icons induce the users to read the detail descriptions which could be felt like a huge task. Detailed description isn't so important.

**Design Choice : What's Not Selected**

- Didn't make default tutorial for beginners of the service. 
    Tutorials are considered boring, and takes users' time & energy
    Instead, we added a question mark icon in ‘my page’ which will work as a tutorial who would like to learn more about using this service, "Igreen"


- Didn't implement purchase function
    If user can purchase the product, actual payment process shoule be implemented for an end-to-end scenario. So leaving it as an open question, we decided to make a wish list for low-fidelity prototype.


### Participants Info
**P1**

- age: 25 yr old

- gender: female

- feature: cafe vlog youtuber

- reason of selection:
  had experience of cafe part time job

  In the process of working at the cafe, she said that many disposable products reminded her of a picture of a straw in the turtle’s nostril, so she often uses a tumbler when she visits other cafes.She’s bought and used eco-friendly dishwashing detergent, but after that she doesn’t find eco-friendly products because the detergent didn’t make bubbles easily.

**P2**

- age: 34 yr old

- gender: male

- feature: freelance entrepreneur

- reason of selection:
  as a young businessman, he did lots of food business, once own the waffle truck at big park in Seoul

  He usually thinks he is interested in the environment, but when asked if he’s ever bought eco-friendly products, he tried to buy them, but didn’t because they were expensive

  Regarding the use of disposable products that he experienced while running the store, he said that it is expensive and difficult to dispose of because disposable products are used very much.



**P3**

- age: 21 yr old

- gender: male

- feature: student

- reason of selection:
  the interviewee that gave the insight of our POV, “It’s my first time seeing eco-friendly consumption through this interview, and I want to continue eco-friendly consumption, but it’s a little difficult to actually practice due to lack of information, price, and so on.”

  He’s recently become interested in the environment, so he is looking for eco-friendly products for his friends’ birthdays

**P4**

- age: 31 yr old

- gender: male

- feature: salaryman

- reason of selection:
  He thinks he is usually quite interested in the environment, but he feels more uncomfortable when he buys eco-friendly products than he thought, so he couldn’t overcome the barrier.

  “I’ve felt complacent about using eco-friendly products”

  However, he is desperately aware of shortcomings such as durability and high price.



### Lessons from Lo-Fi Prototyping
---
**Severity scale**
Evaluated in three aspects, frequency, impact, and persistence, each ranged among Cosmetic, Minor, Major, Catastrophic

**Task 1) Get hints which implies the item's eco-friendliness and speak them out. **

- Worked well
  - User spoke out well about hints they found out.
- Some major&catastrophic problems were found. 



**[Problems]**

<u>Problem : Uses scrolling instead of nav bar feels that the position after clicking navbar is wrong</u>(P1,P2)

- Severity Scale : Major
- Solution
  - Remove the nav bar and create a separate product category page instead

<u>Problem : Doesn’t recognize the change of the frame of the product when the cursor is overlaid on the product image doesn’t catch the purpose of it even after known</u>(P2,P4)

- Severity Scale : Minor
- Solution 
  - Make interaction with not only product image, but also with the companion character. Let the companion be more engaged in the user scenario and give response to their actions. 
  - Add auditory effects along with visual effect

<u>Problem : Does’t scroll down in Detail Page so that doesn’t recognize GIF image & icon/short description at the bottom.</u>(P1,P2,P3,P4)

- Severity Scale : Catastrophic
- Ground 
  - Because their goal is not to buy the product but to add the product to their wish list,they concentrated on clicking the heart icon, instead of looking for description.
    So we decided to induce them to see the information below the first frame.
- Solution
  - Make scroll bars more realizable.
  - Explicit guide by the companion (i.e. “Look down!”)

<u>Problem : Doesn’t recognize the change of GIF image, and doesn’t understand what it means.</u>(P1,P2,P3)

- Severity : Major
- Solution 
  - Change it more intuitive, such as writing down large background text.
  - Make it interactive rather than GIF(which changes without any user's action)



**Task 2) Put 3 items that you think are eco-friendly and one item that you think is not to the wish list**

- Worked well
  - Recognizing the change in the companion state when the users go to Mypage right after adding a certain item into the wish list
  - There were not any difficulties to both sign up and login the service page


- Overall, lots of high ranked problems are discovered in this task in the aspect of severity

**[Problems]**

<u>Problem : User doesn’t know the purpose of the companion</u>(P3)

- Severity Scale : Major
- Solution 
  - Option1)Add a brief description when selecting a character(text balloons of companion introducing them briefly)
  - Option2)sBefore choosing a character, give the user the context of the current situation, pop up a pop-up window with a speech balloon, indicating information such as that you can see other characters through arrow buttons
- Grounds 
  Users were embarrassed having their own companion is not a general feature. 
  So we realized that it is needed to provide enough(but not too much) context explanation for why we are doing this. 

<u>Problem : User is curious about why Mypage is shown right after signing up, and even doesn’t recognize that the page is Mypage</u>(P4)

- Severity Scale : Minor
- Solution 
  - Show the word, “MyPage”
  - Write a big indicator in every page which shows where you are, and make tabs in mypage that can be switched between wish list, purchased history, personal info.
  - 

<u>Problem : Misunderstand non-eco friendly product as an eco-friendly product(by site's concept)</u>(P2,P3)

- Severity : Major
- Solution
  - The concept of the web page is too eco-friendly, so users might think that every products are eco friendly and we strongly agreed with user's words. 
  - We'll change the background from forest to something which doesn't imply environment(i.e white background). 

<u>Problem : Wouldn't buy non-eco friendly product in this site due to negative effects, so non-eco friendly products don't seem to be needed</u>(P2)

- Severity : Major
- Solution
  - We first thought about getting rid of all the non-eco friendly products, but we eventually got to the point that our service is not just green-product shopping mall. Our intend is to help newcomers of eco-friendly products get continuously motivated so they could overcome other factors(personal gain). 
  - Instead of making tree die(too negative) by adding non-eco friendly product to the wish list, we will show the grown progress of the companion(from baby to adult) 
  - Not in main page but in each category page, non-eco friendly products will be contained, but no negative effects will be applied to non-eco friendly products, but positive effects will remain or be developed for the eco-friendly products. 

**Task 3) Make your companion's state "healthy"**

- Worked well
  - User distinguished well between eco-friendly and non eco-friendly items
  - User chose to press heart icons again to remove the likes
- The most severe problems are discovered a lot in this task compared to the others
- Most of problems are either catastrophic or cosmetic, lacking intermediate ones

**[Problems]**

<u>Problem : Fails to realize that pressing heart buttons means the action of adding the product to wish list</u>(P1)

- Severity : Minor
- Solution
    - Use the floating function to display the text ‘Wish List’ under the heart icon when mouse over the heart icon

<u>Problem : Every time he/she puts something in wish list, the companion’s state keeps changing, but it’s annoying because he/she has to keep going back and forth to check it out</u>(P1,P3)

- Severity : Catastrophic
- Solution
    - Change the icon that goes into Mypage to my companion character so that he/she can check the status without going directly to the page
    - The companion character appears and delivers feedback on the user’s behavior so that the character’s status can be displayed right away
    - The router level is displayed on the screen (ex. PersonalCare>Washing>Shampoo), making switching between multiple pages easier

<u>Problem : He/she feels that Mypage acts as a shopping cart and says it would be nice if the expected total price was shown below</u>(P1)

- Severity : Cosmetic
- Solution
    - Add new function for calculating and showing the total price

<u>Problem : Switching like state of products in the wish list is not reflected to the companion’s status immediately</u>(P2,P3)

- Severity : Catastrophic
- Ground 
    - Actions should have immediate visible feedback to enhance user’s learnability
    - Checking the companion’s state is important in accomplishing user goal
    - Repeatedly re-accessing to Mypage for checking companion state is not efficient
- Solution
    - Synchronizes the state of the wish list and character

<u>Problem : Want the tree character to be felt more alive and breathing</u>(P4)

- Severity : Minor
- Solution
    - We believe that setting the eyes of the characters to look at the user from the front will bring us closer to the fundamental purpose of using the characters





### Feedback

---



- What about recommending new users to click "?" mark?  
    Applied to our prototype. 
    
       - Will make our "?" mark more attractive in a high-fidelity prototype by size. 
    
       - When the wish list is empty, text balloon shows above "?" mark of recommending to click it. 
    
            
    
- Login and Sign up are to trivial to include as a task/Task seems to be feature driven.
    - Changed the wording of our task, while making the previous observation we made not to be effected by the change of the task wording change. 

      

    **Previous Task** 

    1. Sign up, select your companion and name it, then login
    2. Put three items that you think are eco-friendly and one item that you think is not to the wish list
    3. Remove like of a non eco-friendly item, and add an eco-friendly one by your own decision

    **Revised Task**

    1. Get hints which implies the item's eco-friendliness. 
    2. Put three items that you think are eco-friendly and one item that you think is not, to the wish list. 
    3. Make your companion's state "healthy"

    

    - More "user focused" than "feature focused"
    - No difference in scenario due to change of the task.(When you try to add item to the wish list without being logged in, the prototype makes you log in or sign up.)
      - Looking through the site, Login, Sign up, and selecting the companion was Task1, but we judged that surfing through the site is one major task of our end-to-end scenario. Getting hints about components that implies eco-friendliness of items, and was a big and major part of previous Task1. We actually emphasized it to our observers, and to speak it out everything they think of it during the observation. 

    

    

- Would be better if something more unique than other shopping sites are added more./I wish you focus more on why people hesitate to buy eco-friendly thing and real problem in the process of buying.
    Companion will give a feedback/response to user's action not only in myPage but in most parts of the whole user scenario. In the process of devising such an brilliant way, we focused on the hesitation points of people when buying eco-friendly product in our high-fidelity prototype. 

    

- Recommending to scroll down to users may be distracting
    Instead of recommending to scroll down, we may make the scroll bar a bit more attractive so that users realize there's something more below. 


























