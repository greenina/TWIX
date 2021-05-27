# DP4 : High-fidelity Prototyping



## POV

---

We re-stated our POV based on the feedback of DP3. While doing this, we tried not to ruin the values what we were inspired from by the interview results.

### POV

> **Newcomers of eco-friendly product consumption**

needs to

> **be supported in continuously receiving impetus about the environment without being discouraged by personal gain(price, functionality, etc)**

because

> **they lack of experience in considering eco-friendly factors when thinking about products in daily life**.
    
<br>
     

### Target Users

> So our target users are **the newcomers of eco-friendly product consumption** who have ever been discouraged their green consumption by personal gain(price, functionality, etc).

We had define the word *newcomer* and *eco-friendly product* on our DP1 report. We also stated our needs and insights based on the interview results we conducted before, and we finally ended up with pretty decent POV through several revisions due to a few feedbacks. We tried to keep reminding our persona we wrote in DP2 and this POV in a progress of listing our tasks and making prototype which are following next parts.

<br><br>

## Tasks : List three core tasks your prototype supports

---

Then, we chose three core tasks our prototype supports for the users. We considered that three tasks could support the end-to-end scenario of the users. Also, we tried to reflect the points that the users hesitate green consuming. We'll explain more in each task.

<br>

**1. Put each one household of every room at home(living room, kitchen, bathroom, bedroom) to wish list**

We just searched for a few reports of green consumption to concentrate on the core problem and to find out what the users really hesitate about the green consumption. While reading them, we found out that the consumer knowledge is one of the most important motivation on buying eco-friednly products<sup>[[1]](#footnote_1)</sup>. We kept considering about the form of mainpage between the page of online shopping mall style and the page with companion, but each one had its own painpoint. So we came out with a new idea based on the reasearch, which is to make the users to realize that there are a lot of eco-friendly products in daily life.

Through this task, the users would realize the existence of various kinds of green products in daily life. We expect this progress can keep users from hesitated consumption of the users which caused by not knowing eco-friendly products. Also, by knowing these informations, they could have more chances to think about eco-friendly factors in real daily life.

<br>
    
**2. Select an eco-friendly cushion you like and put in the wish list**

기존의 유저들이 hesitate한 부분을 가장 직접적으로 해결했다고 볼 수 있다. 이 일련의 과정에서 쿠션을 찾는 과정에서, eco-friendly한 factor들을 접할 수 있는 기회를 많이 만든다.

일단 카테고리 페이지에서 여러 환경친화적인 기준으로 필터링해서 볼 수 있다. 자신이 생각하는 가장 중요한 환경친화적인 요소를 가지고 있는 제품을 살 수 있도록 한다. 자신이 좋아하는 쿠션을 고르는 과정에서 각 제품끼리의 비교가 필수적인데, 이 과정에 대한 베리어를 낮추어 사용자들이 좀 더 쉽게 비교 분석하여 결정할 수 있도록 한다. 비친환경 제품의 경우에는 친환경 제품과 여러 feature들을 비교하고, 친환경 제품을 클릭할 경우 같은 카테고리의 친환경 제품들을 비교하도록 한다. 그래서 그 유저가 hesitate한 점들 중, 각 제품에 대한 비교가 어렵다는 점을 해결하였다.
    
<br>

**3. Choose one non eco-friendly product in a wish list, and replace it with what companion likes**

정보를 아는 것과 지구를 지키고 싶다는 마음이 가장 큰 모티베이션이긴 하나, 이를 지속적으로 이끌어 줄 기능이 필요하다. 이에 대한 해결책으로 유저들이 감정적으로 교류할 수 잇는 companion을 만들자고 생각을 했다. 

유저의 입장에서, 자신의 구매로 인해 companion의 상태가 안좋아지는 결과를 알고 있음에도 그 행동(구입)을 그대로 실행하기란 쉽지 않다. 우리는 이 점을 파고 들었다. 마이페이지의 위시리스트를 보면 일반적인 유저의 경우 친환경적인 제품과 아닌 제품들이 모두 들어 있을 것이다. 친환경 제품의 경우 좋아하고, 아닌 제품의 경우 같은 역할을 하는 더 친환경적인 제품을 보여줌으로써 친환경적인 소비를 할 수 있도록 유도함과 동시에, 이코프렌들리한 facto에 대해 한번 더 생각해보도록 할 수 잇따. 또한 유저는 환경에 대해 한번 더 생각해볼 수 있는 기회를 받음으로써 계속해서 이러한 측면을 생각하고 고려할 수 있도록 도와준다.
    
<br>

*You can check out the end-to-end scenario with these tasks in [this video](https://youtu.be/6vgBhVSdAqY).*

<br><br>

## Implementation Notes

---

### URL of our prototype

URL: <https://twixigreen.herokuapp.com/>

We just found some trivial errors such as the objects become transparent when hovering(it should be translucent, not transparent), or a little database information is not loaded. Since our prototype worked well without any error in local, and also those obejects use same code but acting differently in URL, we are still finding the reason why these errors occur when we deploy the site. Except for these, it works well.

<br>

### URL of our Git repository

URL: <https://github.com/greenina/twixigreen.git>

We just made a new repository for the deployment of our site. Here is our new Git repository URL. We also added README file.

<br>

### Libraries and frameworks

We only used React as an external dependency for our implementation. It might be easier and prettier to use external dependencies, but we decided not to use because those external dependecies might allow us some limitations on the implementation what we really want to express with our prototype. So we just used pure html, js, and css except for React grammar.
Also we applied two pre-maded components with React. One is *react-tooltip* for MainPage, and second one is *react-animated-heart* for DetailPage of each product.

<br>

### Representative screenshots

We implemented all functions we planned to make in low-fi prototyping, with some features changed based on DP3 feedbacks. Among them, we're going to introduce a few screenshots for each page which we think the most important and unique representation of oru applicaiton.

***MainPage***

place we use everyday life

![](https://ifh.cc/g/EVYBXe.jpg)

***CategoryPage***

in a glance

***DetailPage***

three icons / compare table

***MyPage***

companion / recommandation

/////Screenshots capture representative moments of the prototype?

<br><br>

## Individual Reflections

**Gyewon Kim**

- Which part of the UI did you directly contribute to?


- What were some of the difficulties you faced?


- List one useful implementation skill you learned while working on this milestone.



**Inhwa Song**

- Which part of the UI did you directly contribute to?


- What were some of the difficulties you faced?


- List one useful implementation skill you learned while working on this milestone.



**Taeyang Yoon**

- Which part of the UI did you directly contribute to?


- What were some of the difficulties you faced?


- List one useful implementation skill you learned while working on this milestone.



**Seungyeon Choi**

- Which part of the UI did you directly contribute to?


- What were some of the difficulties you faced?


- List one useful implementation skill you learned while working on this milestone.


<br><br>


## Studio Reflection

---

### Google Slide we used

[[Team TWIX] DP 4: Hi-fi Prototyping 2021](https://docs.google.com/presentation/d/1neYmRYsWNs2xCzOmRgPsdWlMKxasMeA_b5JQ3xbhNT8/edit#slide=id.gdcb0c4819c_0_0)

### Peer reviews

**I like …**

- Application Design
    - nice implementation of user-cented design
    - showing the product in the real living context
    - cool animation when heart is clicked
    - green-based overall color web
    - cute/impressive animation on companion which helps users feel more satisfying
- Tasks
    - more meaningful tasks than last presentation


**I wish ...**

- More Description
    - green borders are not enough to show the eco-friendlyness →[[1]](#one)
    - showing selectable products in the image of main page →[[2]](#two)
- More Information
    - more information about protecting animal, protecting nature..etc. →[[3]](#three)
    - how each category is done in this products →[[3]](#three)
    - more information and clarification about in detail below icons (Production Process, ..) →[[4]](#four)
- Standard
    - standard for green products since company may just say that they are doing all of these falsely for their sale →[[5]](#five)
- Improvement on Prototype →[[6]](#six)
    - checkbox to be toggled also when the text is clicked
    - items in the hovering pictures more visible
    - smaller waving bear because it distracts focusing on the products
- Pain Points
    - finding the product by sliding pictures in the mainpage might not be efficient →[[9]](#nine)
    - some products are not only used in particular room, which might make the users confused →[[8]](#eight)
- New Implementation
    - the rating system →[[7]](#seven)
    - feature to search for the item →[[8]](#eight)


**What if ...**
- Flexibility
    - the users put the products that they want →[[7]](#seven)


**Others**

- Where the information of the products coming from →[[10]](#ten)
- Couldn't understand the polar bear at first, and it just seemed to block the view →[[11]](#eleven)
- Why there are also non eco-friendly products(the ones that Bukkuk recommend other products) on your website →[[12]](#twelve)

<br>

### Feedback during Session Time

- not intuitive to me, what it really mean? quite understand/imagine that, but wording could be improved, color difference is not huge to users / more direct improvement on design → [[4]](#four)
- when the bear is dancing, wanna know how they can make it dance. assistance message → [[4]](#fb-four)

<br>

### Summarize the reflection of feedback

- Provision of more description in using prototype

    - <a name="one"></a>[1] Not understanding / misunderstanding the meaning of colors

        Maybe we can provide some additional notes on the top about the meaning of each color has.

    - <a name="fb-two"></a>[2] description about the clickable product

        In prototype, we drawed each product with splashing colors and shaded on the photo to differenciate the products which show tooltips when the mouse is hovering. Among them, we make the mouse pointer to change when the product is clickavle, which means the products exist in the category. Since it's prototype, we made it available for a few products, but in real, all of the products in the photo should be available to click.

- Provision of more information about the products

    - <a name="three"></a>[3] Extra explanation of each categories

        Actually, in low-fi prototype, we gaved some additional information about each products, how the product can effect the environment. However, since we tried to organize them in the process of the product is used, those information just disappeared. We can add those information on the existing icons that match with process in a textbox form so that the users can read when they hover on each icon.
  
    - <a name="four"></a>[4] 저시기

        뭐시기
        
    - <a name="five"></a>[5] 저시기

        뭐시기

- Improvement on prototype

    - <a name="six"></a>[6] New features and modification of original features

        We would try to implement or fix those features!

    - <a name="seven"></a>[7] Flexibility

        We also considered the participation of users, and it was oen of our hmw quesitons. However, we chose to concentrate more on providing the information to users about how the products effect the environment. It could be fascinating to apply those rating, or user-adding features, but we think that's not we should do this time. It has nothing to do with our insight.


- Others

    - <a name="nine"></a>[9] 저시기

        뭐시기

    - <a name="ten"></a>[10] 저시기

        뭐시기
        
    - <a name="eleven"></a>[11] 저시기

        뭐시기

---

<a name="footnote_1">[1]</a> Important motivators for buying green products. <https://www.researchgate.net/publication/286689918_Important_motivators_for_buying_green_products>


