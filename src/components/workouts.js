

const workouts = {
  beginner: {
    gym: {
      pullDay: [
        { name: 'Lat Pulldown', imgSrc: 'https://i.pinimg.com/originals/31/77/c6/3177c6d53ff9fa54983375e724350c6e.gif' },
        { name: 'Seated Row', imgSrc: 'https://i.pinimg.com/originals/3b/19/fd/3b19fd3ba0efec4c4021d3a58dbdba91.gif' },
        { name: 'Dumbbell Rows', imgSrc: 'https://i.pinimg.com/originals/f3/ed/f7/f3edf7a18b8630fb621ef6f76f549747.gif' },
        { name: 'Face Pulls', imgSrc: 'https://i.pinimg.com/originals/1c/57/27/1c57271f8e41797cbce08feb7fb0a1ab.gif' },
        { name: 'Barbell Shrug', imgSrc: 'https://i.pinimg.com/originals/fe/a5/af/fea5af88cca2ae9f4b1a940b106cbdcf.gif' },
      ],
      pushDay: [
        { name: 'Bench Press', imgSrc: 'https://i.pinimg.com/originals/f2/3b/e9/f23be9a08d0cfa3b40edaaad079dff93.gif' },
        { name: 'Incline Dumbbell Press', imgSrc: 'https://i.pinimg.com/originals/76/34/7f/76347f216977f703a7c67d2a5ed04c72.gif' },
        { name: 'Chest Press Machine', imgSrc: 'https://i.pinimg.com/originals/bd/fd/23/bdfd2382f716c87253246f1c504dd1f4.gif' },
        { name: 'Dumbbell Shoulder Press', imgSrc: 'https://i.pinimg.com/originals/15/36/84/15368453a284ad677e9cf1eaed140491.gif' },
        { name: 'Triceps Pushdowns', imgSrc: 'https://i.pinimg.com/originals/15/6b/79/156b79c6e5418472dc05fd4bc161cd16.gif' },
      ],
      legDay: [
        { name: 'Leg Press', imgSrc: 'https://i.pinimg.com/originals/6e/77/3d/6e773d8f6913a93bf2a3e3d31e1e3f0f.gif' },
        { name: 'Back Squats', imgSrc: 'https://i.pinimg.com/originals/ba/1b/ce/ba1bce3e30058ca6b043afd0a9a92b56.gif' },
        { name: 'Leg Curl Machine', imgSrc: 'https://i.pinimg.com/originals/f4/52/26/f452269588930070205af5ff85916698.gif' },
        { name: 'Leg Extensions', imgSrc: 'https://i.pinimg.com/originals/2f/88/8a/2f888a80d3e49f5e31ee372116437540.gif' },
        { name: 'Calf Raises', imgSrc: 'https://i.pinimg.com/originals/42/c2/e0/42c2e013e244a47fe8fc71b49001345b.gif' },
      ],
      abs: [
        { name: 'Crunches', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2015/11/Crunch.gif' },
        { name: 'knee Raises', imgSrc: 'https://i.pinimg.com/originals/21/86/e7/2186e7a33fda75a9ff3f1f2a8eef435a.gif' },
        { name: 'Cable Woodchoppers', imgSrc: 'https://i.pinimg.com/originals/ca/a8/c2/caa8c2c8d4610e4528f7a89c81d2c8f9.gif' },
        { name: 'Cross Crunch', imgSrc: 'https://i.pinimg.com/originals/fd/21/67/fd216722627b23cef752623a57cf406b.gif' },
        { name: 'Planks', imgSrc: 'https://i.pinimg.com/736x/12/95/2a/12952a61de1d194016ac42d7dd39b422.jpg' },
      ],
      cardio: [
        { name: 'Treadmill', imgSrc: 'https://i.pinimg.com/originals/da/e4/4f/dae44fff56db4d6f335b78669e17a883.gif' },
        { name: 'Cycling', imgSrc: 'https://i.pinimg.com/originals/9c/5b/16/9c5b161a5d82ca159febba71e9cca091.gif' },
        { name: 'Elliptical', imgSrc: 'https://i.pinimg.com/736x/9b/08/f7/9b08f7ba798ae441040a8892d47f1345.jpg' },
        { name: 'Dumbbell Iron Cross', imgSrc: 'https://i.pinimg.com/originals/bf/05/78/bf0578b79bb02e2a9773c5a2f170187a.gif' },
        { name: 'Stair Climber', imgSrc: 'https://i.pinimg.com/originals/9d/19/a7/9d19a7f089d639e93b4e910042f6a679.gif' },
      ],
    },
    home: {
      pullDay: [
        { name: 'Resistance Band Rows', imgSrc: 'https://i.pinimg.com/736x/f6/7f/58/f67f5873e08a1570cb5152bd655e7a25.jpg' },
        { name: 'Pull-ups (if available)', imgSrc: 'https://i.pinimg.com/originals/f6/40/12/f64012169c23b6be2a7f1823cac1db13.gif' },
        { name: 'Inverted Rows', imgSrc: 'https://i.pinimg.com/originals/bf/e7/24/bfe724d83654d1f9556d5e25ab7c94da.gif' },
        { name: 'Superman Holds', imgSrc: 'https://i.pinimg.com/736x/82/71/0b/82710b80add101428d0592f80948f845.jpg' },
        { name: 'Renegade Rows', imgSrc: 'https://i.pinimg.com/originals/74/a9/e4/74a9e4e919939044499f9de8757fba84.gif' },
      ],
      pushDay: [
        { name: 'Push-ups', imgSrc: 'https://i.pinimg.com/originals/23/6a/19/236a19e477aa92a6a22e9748b881ee73.gif' },
        { name: 'Triceps Dips (using a chair)', imgSrc: 'https://i.pinimg.com/originals/40/8a/29/408a29849ef328ac26eaec7d972874e7.gif' },
        { name: 'Incline Push-ups', imgSrc: 'https://i.pinimg.com/originals/41/ab/59/41ab5945f4cdb6253337b6fb6f9ffd64.gif' },
        { name: 'Pike Push-ups', imgSrc: 'https://i.pinimg.com/originals/a4/d3/21/a4d3214550fa957eb95cddc817573d39.gif' },
        { name: 'Triceps Extensions (using anything heavy)', imgSrc: 'https://i.pinimg.com/originals/b0/7e/04/b07e041f3be7b6a0164b8a117300d9c4.gif' },
      ],
      legDay: [
        { name: 'Goblet Squats (using anything heavy)', imgSrc: 'https://i.pinimg.com/originals/d6/2b/9b/d62b9b4c947a59d8ee864f345ba9f5e4.gif' },
        { name: 'Lunges', imgSrc: 'https://i.pinimg.com/originals/94/b9/fb/94b9fbf1689b8e3b12735a8ce5a8e144.gif' },
        { name: 'Glute Bridges', imgSrc: 'https://i.pinimg.com/736x/03/ac/0b/03ac0b6a58de28742086a6d8741fa3c4.jpg' },
        { name: 'Bulgarian Split Squats', imgSrc: 'https://i.pinimg.com/originals/51/05/b3/5105b38596c30705fc7b5f03a37d9246.gif' },
        { name: 'Calf Raises (using a step)', imgSrc: 'https://i.pinimg.com/736x/c0/65/67/c06567e88116837987e0a1b87911842d.jpg' },
      ],
      abs: [
        { name: 'High Knee Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/11/High-Knee-Squat.gif' },
        { name: 'knee Raises', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Lying-Knee-Raise.gif' },
        { name: 'Weighted Planks', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif' },
        { name: 'Russian twist', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Russian-Twist.gif' },
        { name: 'Hollow Hold', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/HollowHold.png' },
      ],
      cardio: [
        { name: 'Running', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/07/Run.gif' },
        { name: 'Squat Tuck Jump', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Squat-Tuck-Jump.gif' },
        { name: 'Jack Burpees', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Jack-Burpees.gif' },
        { name: 'High Knees Against Wall', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/High-Knees-against-wall.gif' },
        { name: 'Jumping Jacks', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Jumping-jack.gif' },
      ],
    },
  },

  intermediate: {
    gym: {
      pullDay: [
        { name: 'Pull-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
        { name: 'Barbell Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif' },
        { name: 'T-Bar Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/t-bar-rows.gif' },
        { name: 'Cable Pullover', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Lying-Extension-Pullover.gif' },
        { name: 'Dumbbell Straight Leg Deadlifts', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Dumbbell-Straight-Leg-Deadlift.gif' },
      ],
      pushDay: [
        { name: 'Overhead Press', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/07/Barbell-Standing-Military-Press.gif' },
        { name: 'Incline Dumbbell Press', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif' },
        { name: 'Chest Dips', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Chest-Dips.gif' },
        { name: 'Dumbbell Flys', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Fly.gif' },
        { name: 'Close-grip Bench Press', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif' },
      ],
      legDay: [
        { name: 'Barbell Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/BARBELL-SQUAT.gif' },
        { name: 'Walking Lunges', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/09/dumbbell-lunges.gif' },
        { name: 'Romanian Deadlifts', imgSrc: 'https://i.pinimg.com/736x/05/d1/ee/05d1ee0d449a9b05771818269bc9690a.jpg' },
        { name: 'Hack Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Hack-Squat.gif' },
        { name: 'Standing Calf Raises', imgSrc: 'https://i.pinimg.com/originals/42/c2/e0/42c2e013e244a47fe8fc71b49001345b.gif' },
      ],
      abs: [
        { name: 'Cable Crunches', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Standing-Cable-Crunch.gif' },
        { name: 'Hanging Leg Raises', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/01/Toes-to-Bar.gif' },
        { name: 'V-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-V-up.gif' },
        { name: 'Seated Cable Twists ', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Cable-Twist.gif' },
        { name: 'Ab Wheel Rollouts', imgSrc: 'https://i.pinimg.com/originals/81/c6/ac/81c6ac9bf4e3de344451a42286cb89be.gif' },
      ],
      cardio: [
        { name: 'HIIT Sprints', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/06/sprint.gif' },
        { name: 'Rowing Machine', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Rowing-Machine.gif' },
        { name: 'Jump Rope', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif' },
        { name: 'Cycling', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Stationary-Bike-Run.gif' },
        { name: 'Stair Climber', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Walking-on-Stepmill.gif' },
      ],
    },
    home: {
      pullDay: [
        { name: 'Pull-ups (if available)', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
        { name: 'Resistance Band Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Seated-Row.gif' },
        { name: 'Inverted Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Table-Inverted-Row.gif' },
        { name: 'Superman Holds', imgSrc: 'https://i.pinimg.com/736x/82/71/0b/82710b80add101428d0592f80948f845.jpg' },
        { name: 'Renegade Rows', imgSrc: 'https://i.pinimg.com/originals/74/a9/e4/74a9e4e919939044499f9de8757fba84.gif' },
      ],
      pushDay: [
        { name: 'Push-ups', imgSrc: 'https://i.pinimg.com/originals/23/6a/19/236a19e477aa92a6a22e9748b881ee73.gif' },
        { name: 'Dips (using a chair)', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Dips-Between-Chairs.gif' },
        { name: 'Incline Push-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Incline-Push-Up.gif' },
        { name: 'Pike Push-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Pike-Push-up.gif' },
        { name: 'Doorway Pec and Shoulder Stretch', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/01/Doorway-chest-and-sshoulder-stretch.gif' },
      ],
      legDay: [
        { name: 'Cossack Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Cossack-Squat.gif' },
        { name: 'Lunges', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/10/Static-Lunge.gif' },
        { name: 'Glute Bridges', imgSrc: 'https://i.pinimg.com/originals/5d/24/4a/5d244a5da6de79d8ce4ede92848fa6b5.gif' },
        { name: 'Bulgarian Split Squats Jump', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/03/Bulgarian-Jump-Squat.gif' },
        { name: 'Squat Hold Calf Raise', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/12/Squat-Hold-Calf-Raise.gif' },
      ],
      abs: [
        { name: 'Mountain Climbers', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-climber.gif' },
        { name: 'Leg Raises', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif' },
        { name: 'Weighted Planks', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif' },
        { name: 'Crunches', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Double-Crunches.gif' },
        { name: 'Bicycle Crunches', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/01/Bicycle-Twisting-Crunch.gif' },
      ],
      cardio: [
        { name: 'Running', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/07/Run.gif' },
        { name: 'Jump Rope', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif' },
        { name: 'Jack Burpees', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Jack-Burpees.gif' },
        { name: 'High Knees', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Run-in-Place.gif' },
        { name: 'Jumping Jacks', imgSrc: 'https://i.pinimg.com/originals/0f/59/99/0f5999285c02a718b8b7f1cd75336356.gif' },
      ],
    },
  },

  advanced: {
    gym: {
      pullDay: [
        { name: 'Muscle Up', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Muscle-up-vertical-bar.gif' },
        { name: 'Reverse Barbell Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Reverse-Grip-Barbell-Row.gif' },
        { name: 'T-Bar Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lever-T-bar-Row.gif' },
        { name: 'Cable Seated Pullover', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Cable-Seated-Pullover.gif' },
        { name: 'Deadlifts', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Deadlift.gif' },
      ],
      pushDay: [
        { name: 'Lever Incline Hammer Chest Press ', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Lever-Incline-Hammer-Chest-Press.gif' },
        { name: 'Lever Incline Chest Press', imgSrc: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Lever-Incline-Chest-Press.gif" },
        { name: 'Chest Dips', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Chest-Dips.gif' },
        { name: 'Incline Chest Fly', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/06/Incline-Chest-Fly-Machine.gif' },
        { name: 'Decline Bench Press', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/03/Decline-Barbell-Bench-Press.gif' },
      ],
      legDay: [
        { name: 'Front Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/front-squat.gif' },
        { name: 'Bulgarian Split Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Barbell-Bulgarian-Split-Squat.gif' },
        { name: 'Romanian Deadlifts', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Romanian-Deadlift.gif' },
        { name: 'Glute Ham Raise', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/07/Glute-Ham-Raise.gif' },
        { name: 'Hack Squat Calf Raise', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Hack-Squat-Calf-Raise.gif' },
      ],
      abs: [
        { name: 'Dragon Flag', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/07/Leg-Raise-Dragon-Flag.gif' },
        { name: ' Leg Raises', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Captains-Chair-Leg-Raise.gif' },
        { name: 'V-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Dumbbell-V-up.gif' },
        { name: 'Kettlebell Windmill', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Windmill.gif' },
        { name: 'Ab Wheel Rollouts', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Ab-Wheel-Rollout.gif' },
      ],
      cardio: [
        { name: 'HIIT Sprints', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/06/sprint.gif' },
        { name: 'Rowing Machine', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Rowing-Machine.gif' },
        { name: 'Jump Rope', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif' },
        { name: 'Cycling', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Bike.gif' },
        { name: 'Stair Climber', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Walking-on-Stepmill.gif' },
      ],
    },
    home: {
      pullDay: [
        { name: 'Pull-ups with Weighted Vest', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif' },
        { name: 'Resistance Band Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Band-Seated-Row.gif' },
        { name: 'Inverted Rows', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Table-Inverted-Row.gif' },
        { name: 'Swimming', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Swimming.gif' },
        { name: 'Renegade Rows', imgSrc: 'https://i.pinimg.com/originals/74/a9/e4/74a9e4e919939044499f9de8757fba84.gif' },
      ],
      pushDay: [
        { name: 'Reverse Push-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Reverse-Push-up.gif' },
        { name: 'Dips ', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/04/Dips-Between-Chairs.gif' },
        { name: 'Diamond Push-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Diamond-Push-up.gif' },
        { name: 'Pike Push-ups', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Pike-Push-up.gif' },
        { name: 'High Chest Fly With Resistance Band', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/05/High-Chest-Fly-With-Resistance-Band.gif' },
      ],
      legDay: [
        { name: 'Curtsy Squats', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Curtsey-Squat.gif' },
        { name: 'Power Lunges', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/09/power-lunge.gif' },
        { name: 'Reverse Plank', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Reverse-plank.gif' },
        { name: 'Bulgarian Split Squat Jump', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2023/03/Bulgarian-Jump-Squat.gif' },
        { name: 'Calf Raises ', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Standing-Calf-Raise.gif' },
      ],
      abs: [
        { name: 'Mountain Climbers', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Mountain-climber.gif' },
        { name: 'Leg Raises', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/Lying-Leg-Raise.gif' },
        { name: 'Weighted Planks', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/04/Weighted-Front-Plank.gif' },
        { name: 'Crunches', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/05/Floor-Crunch.gif' },
        { name: 'Hollow Hold', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/02/HollowHold.png' },
      ],
      cardio: [
        { name: 'Fast Feet Running', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/Fast-Feet-Run.gif' },
        { name: 'Jump Rope', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/06/Jump-Rope.gif' },
        { name: 'Jack Burpees', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/10/Jack-Burpees.gif' },
        { name: 'High Knees Against Wall', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2021/09/High-Knees-against-wall.gif' },
        { name: 'Squat Tuck Jump', imgSrc: 'https://fitnessprogramer.com/wp-content/uploads/2022/02/Squat-Tuck-Jump.gif' },
      ],
    },
  },
};

export default workouts;

