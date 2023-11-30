var storyContent = ﻿{"inkVersion":20,"root":[["^When bone is nearly breaking, the force upon it finds a fulcrum in a singular, bending, point.","\n","ev","str","^bend","/str","/ev",{"*":"0.c-0","flg":20},{"c-0":["\n",{"->":"0.g-0"},{"#f":5}],"g-0":["^The bone fights back. The weakest point still resists. Its kinetic refusal sending shockwaves through flesh.","\n","^Marrow compresses. Parallel bundles of collagen creak like a spit-wet thumb on an overfull balloon.","\n","^Capilaries burst as the body tears in tiny places.","\n","ev","str","^tear","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":"0.g-1"},{"#f":5}],"#f":5}],"g-1":["^In the fulcrum's refusal, the tendons and muscle and ligaments find their weakness at a point just shy of the bone's full strength. Any step in any direction can stress a bone to fracture, and a fractured bone to break.","\n","^And the network of weaker beings that give the bone purpose are expected to tear, and later, recover.","\n","ev","str","^Recover","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"#":"CLEAR"},{"->":"0.g-2"},{"#f":5}],"#f":5}],"g-2":[{"#":"CLEAR"},"^Mia sits on the steps of an oft-vacant apartment, wondering if she she can still get her pet deposit back. She's the third tennant in two months to uncritically accept rent this far below the market rate.","\n","^She watches the streets for signs of police lights while the wet concrete steps dig pockmarks into the backs of her thighs.","\n","^Her right ankle is visibly swolen.","\n","^There is a voice coming from her phone","\n","ev","str","^Answer The Call","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["\n",{"->":"0.g-3"},{"#f":5}],"#f":5}],"g-3":[{"#":"CLEAR"},"^Mia's left arm twitches in pain as she lifts her phone before holding it between her ear and shoulder.","\n","^\"Honey are you still there?\"","\n",["ev",{"^->":"0.g-3.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^\"Yeah, I'm out front\"",{"->":"$r","var":true},null]}],{"c-4":["ev",{"^->":"0.g-3.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n",{"->":"0.g-4"},{"#f":5}],"#f":5}],"g-4":["^\"Good, good. Sorry for putting you on hold. It's been wild trying to dispatch everyone it feels impossible right now. You would not believe the night your neighborhood is having.\"","\n",["ev",{"^->":"0.g-4.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^\"I think I might\"",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-4.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-6","flg":18},{"s":["^\"I hate that for you\"",{"->":"$r","var":true},null]}],["ev",{"^->":"0.g-4.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-7","flg":18},{"s":["^\"Through god all things are possible, Ma'am\"",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"0.g-4.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n","^\"Well, yes I suppose that's true honey.","\n",{"->":"0.g-5"},{"#f":5}],"c-6":["ev",{"^->":"0.g-4.c-6.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^\"Sure sounds like it.","\n",{"->":"0.g-5"},{"#f":5}],"c-7":["ev",{"^->":"0.g-4.c-7.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n","^\"That's the spirit, honey.","\n",{"->":"0.g-5"},{"#f":5}],"#f":5}],"g-5":["<>","^ Now the officers are on their way, so I'm just going to need for you to sit tight. Do you feel safe where you are?\"","\n","ev","str","^lie","/str","/ev",{"*":".^.c-8","flg":20},"ev","str","^lie a little","/str","/ev",{"*":".^.c-9","flg":20},{"c-8":["\n","^\"Thats a blessing, in that case stay where you are\"","\n",{"->":"0.g-6"},{"#f":5}],"c-9":["\n","^\"Yes I suppose feeling safe _is_ different than being safe. But as long as you're in a location where you aren't in immediate physical danger I say we can count that as a blessing\"","\n",{"->":"0.g-6"},{"#f":5}],"#f":5}],"g-6":["^\"Now I hate to do this but I have to answer other lines and I need this one open. There currently aren't any ambulances available but from the sounds of it your friends... I mean to say as soon as an officer is available they'll head your way. Good luck\"","\n",["ev",{"^->":"0.g-6.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-10","flg":18},{"s":["^say \"You too\"",{"->":"$r","var":true},null]}],{"c-10":["ev",{"^->":"0.g-6.c-10.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Mia says \"You too\" into the phone on her shoulder","\n",{"->":"say_you_too"},{"->":"0.g-7"},{"#f":5}],"#f":5}],"g-7":["done",{"#f":5}]}],"done",{"say_you_too":[["^The phone is silent","\n",["ev",{"^->":"say_you_too.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^ ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^wait a minute for a response",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],{"->":"$r","var":true},null]}],["ev",{"^->":"say_you_too.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^wait several minutes for a response",{"->":"$r","var":true},null]}],["ev",{"^->":"say_you_too.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^hang up the phone",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"say_you_too.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"say_you_too.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n","^\"Honey I really need you to hang up the phone, this thing just puts you on hold when I switch to another line but I can still see you there blinking away and other callers need to get through. Oh, and my name's Theresea if you want to leave me a positive google review\"","\n",{"->":".^.^.^"},{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"say_you_too.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"#":"CLEAR"},"^Mia hears sirens in the distance, but none of them sound like they're getting any closer.","\n","^Two floors up there's a hastily placed \"For Rent\" sign in the window of a room with the lights still on. It's never come down for more than a few days. Three floors up is a window frame, but the window is somewhere in the bushes.","\n","^Mia has several phone notifications from when she was on the call with emergency services.","\n",["ev",{"^->":"say_you_too.0.g-0.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Check the phone",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"say_you_too.0.g-0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"waiting_on_cops_choices"},{"#f":5}],"#f":5}]}],{"#f":1}],"set_local_weather":[[["ev",{"^->":"set_local_weather.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^tap the weather icon",{"->":"$r","var":true},null]}],["ev",{"^->":"set_local_weather.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":2},{"s":["^return to homescreen",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^tap \"use current location\"",{"->":"$r","var":true},null]}],["ev",{"^->":"set_local_weather.0.c-0.7.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^return to homescreen ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^select \"allow weather to use current location\" on the popup",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^tap \"app settings\" on the \"Settings\" menu",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^scroll to \"Weather\" in \"app settings\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^tap \"Weather\" in \"app settings\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^slide the \"location services\" toggle\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^select \"while using\" from the permissions popup",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":"waiting_on_cops_choices"},{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"set_local_weather.0.c-0.7.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],{"->":"waiting_on_cops_choices"},"\n",[["ev",{"^->":"set_local_weather.0.c-0.7.c-1.8.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^return to homescreen ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"set_local_weather.0.c-0.7.c-1.8.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],{"->":"waiting_on_cops_choices"},"\n",{"->":".^.^.^.^.^.^.^"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"set_local_weather.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"->":"waiting_on_cops_choices"},"^and then presses the \"use current location\" button, and then the \"allow Weather to use current location\" notification pops up, so Mia presses \"accept\" which then brings her to \"Settings, app settings\" where she scrolls down to \"Weather\" and then presses on \"","\n",{"#f":5}]}],{"#f":1}],"waiting_on_cops_choices":[["^The current time is 1:37 AM","\n",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Mia has zero missed calls",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],"\n","^The current temperature in ","ev",{"CNT?":"set_local_weather"},"/ev",[{"->":".^.b","c":true},{"b":["^??? is -- degrees",{"->":".^.^.^.10"},null]}],[{"->":".^.b"},{"b":["^Cupertino is 73 degrees",{"->":".^.^.^.10"},null]}],"nop","^.","\n","ev",{"CNT?":"set_local_weather"},"/ev",[{"->":".^.b","c":true},{"b":["^ ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^there is an icon indicating location services are unavailable",{"->":".^.^.17"},null],"s1":["pop",{"->":".^.^.17"},null],"#f":5}],{"->":".^.^.^.17"},null]}],"nop","\n",["ev",{"^->":"waiting_on_cops_choices.0.19.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Your move-in inspection checklist requires review within 8 hours",{"->":"$r","var":true},null]}],["ev",{"^->":"waiting_on_cops_choices.0.20.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^check dating app notifications",{"->":"$r","var":true},null]}],["ev",{"^->":"waiting_on_cops_choices.0.21.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^Your rental agreement has a pending addendum",{"->":"$r","var":true},null]}],["ev",{"^->":"waiting_on_cops_choices.0.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Your maintenance request has failed to submit",{"->":"$r","var":true},null]}],["ev",{"^->":"waiting_on_cops_choices.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^Set the temperature to use your current location",{"->":"$r","var":true},null]}],["ev",{"^->":"waiting_on_cops_choices.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-5","flg":18},{"s":["^The following services require your attention",{"->":"$r","var":true},null]}],"ev","str","^Put phone away","/str","/ev",{"*":".^.c-6","flg":20},{"c-0":["ev",{"^->":"waiting_on_cops_choices.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.19.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Mia reviews the apartment move-in inspection checklist, which is mostly a long list of things like \"outlets\", \"door frames\", and \"faucets\" next to a rating of \"fine\", \"fair\", and \"needs repair\". in the section for \"other\" she adds \"claw marks on walls\" and \"the attic door wont stay closed\".","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"waiting_on_cops_choices.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.20.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Mia has several new likes from people that live outside her city, and something called a ThirstySlurp™ from someone who she tried unmatching twice already. He commented \"vibes ;)\" on a madlib she filled out that reads:","\n","^I was a MUSICIAN before I REALIZED I NEEDED HEALTH INSURANCE. My morning routine is COMMUTING with my hot cup of NOSTALGIA FOR THE FREEDOM OF YOUTH.","\n","^My evening routine is ALSO COMMUTING with a dash of self-care, so I always go to bed feeling GUILTY FOR GETTING TAKE OUT AGAIN.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"waiting_on_cops_choices.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.21.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Mia's welcome email from the leasing office reads:","\n","^Your home in the renovated mill: New appliances, granite countertops, minutes from downtown, free wi-fi, pets allowed (with restrictions), laundry hookups, breakfast nook, bay windows, 3 bedrooms, 1.5 baths, and unlimited attic space***","\n","^She ammends that portion of the agreement to say \"Extremely open concept kitchen\" and \"neighbors can't hear you\" and submits The Form. The Form is now awaiting approval from The Signatories.","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["ev",{"^->":"waiting_on_cops_choices.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^The maintenance request Mia submitted before calling 911 has gone from \"Pending\" to \"Resolved\".","\n","^The resolution details explain that the request for repairs and cleaning could not be processed at this time due to the graphic content detected in the attatched images.","\n","^The Maintenance App takes a firm stance against images depicting bodily harm, but invites Mia to contact them during business hours (Monday through Wednesday, 1 PM to 3:45 PM UTC) to speak to their automated Voice Resopnse Unit which will then forward the dispute to the appropriate department.","\n",{"->":".^.^.^"},{"#f":5}],"c-4":["ev",{"^->":"waiting_on_cops_choices.0.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":"set_local_weather"},{"#f":5}],"c-5":["ev",{"^->":"waiting_on_cops_choices.0.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Since getting off the plane yesterday, Mia's phone has been letting her know a couple times a day that it can't tell where she is. She dismisses it again, and it warns her that some apps won't work properly.","\n","^Her friends had the same problem when they landed. Alex is convinced they all need new SIM cards, citing his experience as a graphic designer for a ride share app that doesn't operate in this city.","\n",{"->":".^.^.^"},{"#f":5}],"c-6":["\n",{"#":"CLEAR"},{"->":"deal_with_the_blood_out_front"},{"#f":5}]}],{"#f":1}],"deal_with_the_blood_out_front":[["^Mia shuts her phone screen off and notices matte brownish streaks on the glossy black finish.","\n","^There are flecks of dry blood all over her, dispersed on her skin with similar horror and aerosolization as a stranger carelessly sneezing on you as they squeeze by on the train. Her cardigan was clean of the iron laden overspray since it was the last thing she touched in her apartment while running out the door, but hidden in its fibers where her sweat was mixing with Alex's AB negative, woolen capilaries slowly converted to a familiar shade of #880808","\n",["ev",{"^->":"deal_with_the_blood_out_front.0.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Stand",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"deal_with_the_blood_out_front.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[{"#":"CLEAR"},"^Mia stands, the cold concrete leaving a burning feeling as it releases the crimps in her thighs. She wipes her hands on her legs, making streaks of red from the expired watercolor flecks Alex provided.","\n","^There isn't much blood on her, and it isn't her blood, but if there were and it was at least she wouldn't be the one that had to clean it up. But it's not, so she does.","\n","^Her sweat turns cold as the night air creeps through the gaps of her sweater. The goosebumps on her legs raise recently shaved hairs like lazerous from the dead. She doesn't know how cold it is here, just that she can see her breath and can't feel her injuries.","\n",{"->":"choices_out_front_before_entering"},{"#f":5}]}],{"#f":1}],"choices_out_front_before_entering":[[["ev",{"^->":"choices_out_front_before_entering.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^look around the street",{"->":"$r","var":true},null]}],["ev",{"^->":"choices_out_front_before_entering.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^look at the buildings",{"->":"$r","var":true},null]}],["ev",{"^->":"choices_out_front_before_entering.0.2.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^look at the window frame",{"->":"$r","var":true},null]}],["ev",{"^->":"choices_out_front_before_entering.0.3.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":2},{"s":["^look at the door",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"choices_out_front_before_entering.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Mia looks at the street leading to the apartment complex.","\n","^It's black and vaguely road shaped. Like a boulevard that came from money so it doesn't feel the need to put on airs. It's certainly got all the stuff roads should have, except traffic or reflective paint.","\n",[["ev",{"^->":"choices_out_front_before_entering.0.c-0.12.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^look deeply at the street",{"->":"$r","var":true},null]}],["ev",{"^->":"choices_out_front_before_entering.0.c-0.12.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^look at something else",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"choices_out_front_before_entering.0.c-0.12.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n","^The street unfurled itself in a languorous stretch, yawning beneath the pinpricked, uninterested sky. Its pavements, a patchwork of faded slabs, bore the silent testament of countless, unremarked passings.","\n","^Here and there, a lone tree, stunted and weary, struggled against the concrete, its leaves a muted chorus of resignation to the unyielding urban sprawl.","\n","^In this place, where time seemed to move with the lethargy of the deeply bored, the street whispered its story – a tale not of grand events or notable happenings, but of the quiet, relentless passage of the ordinary, the everyday, the unseen.","\n",{"->":".^.^.^.^.^"},{"#f":5}],"c-1":["ev",{"^->":"choices_out_front_before_entering.0.c-0.12.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},{"->":".^.^.^.^.^"},{"#f":5}]}],{"#f":5}],"c-1":["ev",{"^->":"choices_out_front_before_entering.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^The buildings surrounding Mia's too-nice apartment are remnants of a textile mill in the throes of rennovation. The only areas not bearing signs of ongoing construction are The Leasing Office, the swimming pool featured on the website, and the portion of the textile mill deemed \"Legal for humans to be in\" by The City Housing Authority.","\n","^The only cars in the parking lot are hers and her friend's rental cars.","\n",{"->":".^.^.^"},{"#f":5}],"c-2":["ev",{"^->":"choices_out_front_before_entering.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.2.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Whatever attacked her and her friends left through the closed third floor window. The window didn't break when those things shot through it, almost like the window wasn't properly attached in the first place.","\n",{"->":".^.^.^"},{"#f":5}],"c-3":["ev",{"^->":"choices_out_front_before_entering.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.3.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Above the door are large numbers reading 317. Despite this being the only legally habitable structure within screaming distance, Mia doesn't find the numbering any stranger than any other apartment complex she's lived at.","\n","^The door is solidly built and secured with a brand new magnetized lock. There is a black rectangle beside the door for swiping a key fob. Mia got two key fobs when she moved in, which are coded to her room number and can track who opens the door each time it unlocks. Mia hasn't seen any evidence that anyone else lives in the building, so the only functioning key fobs are upstairs in her apartment.","\n",{"->":"jiggle_the_front_door"},{"#f":5}]}],{"#f":1}],"jiggle_the_front_door":[[["ev",{"^->":"jiggle_the_front_door.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":2},{"s":["^inspect the black rectangle",{"->":"$r","var":true},null]}],["ev",{"^->":"jiggle_the_front_door.0.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^jiggle the door handle",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"jiggle_the_front_door.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^Mia pulls slightly on the heavy casing surrounding the key scanner. It lets out a shrill beep and the door unlatches","\n",{"->":"enter_the_door"},{"#f":5}],"c-1":["ev",{"^->":"jiggle_the_front_door.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"\n",{"#":"CLEAR"},"^The door makes a rattling sound","\n",{"->":".^.^.^"},{"#f":5}]}],{"#f":1}],"enter_the_door":["^the rest of the story goes here once I write it. She can also get in through the window but I haven't written that either.","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};