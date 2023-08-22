// const express = require("express");
// const Order = require("../models/Order")
// const bodyParser = require('body-parser');

// require("dotenv").config();

// const stripe = require('stripe')('sk_test_51M8nldEB9THlH9qFuSOKHuzaS4Lc4V90geitPUFULGHGh9H896lnn5HEITw8V7nxq1QZ0goGABJ4p9hWjg776LE000Ik9M1pMu')
// // const stripe = Stripe(process.env.REACT_APP_STRIPE);

// const router = express.Router();

// router.post('/create-checkout-session', async (req, res) => {
//   const customer = await stripe.customers.create({
//     metadata: {
//       userId: req.body.userId,
//     },
//   });

//   const line_items = req.body.cartItems.map(item => {
//     return{
//         price_data: {
//           currency: 'mnt',
//           product_data: {
//             name: item.title,
//             images: [item.img],
//             description: item.desc,
//             metadata: {
//               id: item.id
//             }
//           },
//           unit_amount: item.price * 100,
//         },
//         quantity: item.cartQuantity,
//       }
    
//   })

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     shipping_address_collection: {
//       allowed_countries: ["MN"],
//     },
//     shipping_options: [
//       {
//         shipping_rate_data: {
//           type: "fixed_amount",
//           fixed_amount: {
//             amount: 0,
//             currency: "mnt",
//           },
//           display_name: "Free shipping",
//           // Delivers between 5-7 business days
//           delivery_estimate: {
//             minimum: {
//               unit: "business_day",
//               value: 5,
//             },
//             maximum: {
//               unit: "business_day",
//               value: 7,
//             },
//           },
//         },
//       },
//       {
//         shipping_rate_data: {
//           type: "fixed_amount",
//           fixed_amount: {
//             amount: 2000000,
//             currency: "mnt",
//           },
//           display_name: "Next day air",
//           // Delivers in exactly 1 business day
//           delivery_estimate: {
//             minimum: {
//               unit: "business_day",
//               value: 1,
//             },
//             maximum: {
//               unit: "business_day",
//               value: 1,
//             },
//           },
//         },
//       },
//     ],
//     phone_number_collection: {
//       enabled: true,
//     },
//     line_items,
//     mode: 'payment',
//     customer: customer.id,
//     success_url: "http://localhost:3000/checkout-success",
//     cancel_url: "http://localhost:3000/cart",
//   });

//   res.send({url: session.url});
// });

// // Create order function

// const createOrder = async (customer, data, line_items) => {
//   const newOrder = new Order({
//     userId: customer.metadata.userId,
//     customerId: data.costumer,
//     paymentIntentId: data.payment_intent,
//     products: line_items.data,
//     subtotal: data.amount_subtotal,
//     total: data.amount_total,
//     shipping: data.customer_details,
//     payment_status: data.payment_status,
//   });

//   try{
//     const savedOrder = await newOrder.save();
//     console.log("processed order:", savedOrder);
//   }catch(err){
//     console.log(err)
//   }
// };

// // stripe webhook
// router.post('/webhook', bodyParser.raw({type: 'application/json'}),
//   async (req, res) => {
//     let data;
//     let eventType;
//     const payload = req.body

//     let webhookSecret;
//     //webhookSecret = process.env.STRIPE_WEB_HOOK ;

//     if (webhookSecret) {
//       let event;
//       let signature = req.headers["stripe-signature"];

//       try {
//         event = stripe.webhooks.constructEvent(
//           req.body,
//           signature,
//           webhookSecret
//         );
//       } catch (err) {
//         console.log(`⚠️  Webhook signature verification failed:  ${err}`);
//         return res.sendStatus(400);
//       }
//       data = event.data.object;
//       eventType = event.type;
//     } else {
//       data = req.body.data.object;
//       eventType = req.body.type;
//     }

//     // Handle the checkout.session.completed event
//     if (eventType === "checkout.session.completed") {
//       stripe.customers
//         .retrieve(data.customer)
//         .then(async (customer) => {
//           try {
//             // CREATE ORDER
//             stripe.checkout.sessions.listLineItems(
//               data.id,
//               {},
//               function (err, lineItems) {
//                 console.log("line items", lineItems);

//                 createOrder(customer, data, lineItems);
//               }
//             );
//           } catch (err) {
//             console.log(typeof createOrder);
//             console.log(err);
//           }
//         })
//         .catch((err) => console.log(err.message));
//     }
//     console.log(payload)
//     res.status(200).end();
//   }
//     );
    
//     module.exports = router;


const express = require("express");
const Stripe = require("stripe");
const { Order } = require("../models/Order");

require("dotenv").config();

const stripe = Stripe(process.env.REACT_APP_STRIPE);

const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const customer = await stripe.customers.create({
    metadata: {
      userId: req.body.userId,
    },
  });

  const line_items = req.body.cartItems.map((item) => {
    return {
      price_data: {
        currency: "mnt",
        product_data: {
          name: item.title,
          images: [item.img],
          description: item.desc,
          metadata: {
            id: item.id,
          },
        },
        unit_amount: item.price * 100,
      },
      quantity: item.cartQuantity,
    };
  });

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["MN"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "mnt",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 1500,
            currency: "mnt",
          },
          display_name: "Next day air",
          // Delivers in exactly 1 business day
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 1,
            },
            maximum: {
              unit: "business_day",
              value: 1,
            },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
    line_items,
    mode: "payment",
    customer: customer.id,
    success_url: "http://localhost:3000/checkout-success",
    cancel_url: "http://localhost:3000/cart",
  });

  // res.redirect(303, session.url);
  res.send({ url: session.url });
});

// Create order function

const createOrder = async (customer, data, line_items) => {
  const newOrder = new Order({
    userId: customer.metadata.userId,
    customerId: data.customer,
    paymentIntentId: data.payment_intent,
    products: line_items.data,
    subtotal: data.amount_subtotal,
    total: data.amount_total,
    shipping: data.customer_details,
    payment_status: data.payment_status,
  });

  try {
    const savedOrder = await newOrder.save();
    console.log("Processed Order:", savedOrder);
  } catch (err) {
    console.log(err);
  }
};

// Stripe webhoook

router.post(
  "/webhook",
  express.json({ type: "application/json" }),
  async (req, res) => {
    let data;
    let eventType;

    // Check if webhook signing is configured.
    let webhookSecret;
    //webhookSecret = process.env.STRIPE_WEB_HOOK;

    if (webhookSecret) {
      // Retrieve the event by verifying the signature using the raw body and secret.
      let event;
      let signature = req.headers["stripe-signature"];

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          signature,
          webhookSecret
        );
      } catch (err) {
        console.log(`⚠️  Webhook signature verification failed:  ${err}`);
        return res.sendStatus(400);
      }
      // Extract the object from the event.
      data = event.data.object;
      eventType = event.type;
    } else {
      // Webhook signing is recommended, but if the secret is not configured in `config.js`,
      // retrieve the event data directly from the request body.
      data = req.body.data.object;
      eventType = req.body.type;
    }

    // Handle the checkout.session.completed event
    if (eventType === "checkout.session.completed") {
      stripe.customers
        .retrieve(data.customer)
        .then(async (customer) => {
          try {
            // CREATE ORDER
            stripe.checkout.sessions.listLineItems(
              data.id,
              {},
              function (err, lineItems) {
                console.log("line items", lineItems);

                createOrder(customer, data, lineItems);
              }
            );
          } catch (err) {
            console.log(typeof createOrder);
            console.log(err);
          }
        })
        .catch((err) => console.log(err.message));
    }

    res.status(200).end();
  }
);

module.exports = router;
