// JSON.stringify & JSON.parse — a mini story

console.log("Rahul Chaudhary");

// 1. A real-world object (e.g. a user profile from your app)
const user = {
  id: 101,
  name: "Rahul Chaudhary",
  email: "rahul@example.com",
  joinedAt: new Date("2026-09-15"),
  isActive: true,
  courses: ["Node.js", "Express", "MongoDB"],
  address: { city: "Dhaka", country: "Bangladesh" },
  // functions and undefined don't survive JSON:
  greet() { return "hello"; },
  nickname: undefined,
};

console.log("=== 1. Object -> JSON string (compact) ===");
const compact = JSON.stringify(user);
console.log(compact);

console.log("\n=== 2. Object -> JSON string (pretty printed) ===");
// 2-space indentation makes it human-readable
const pretty = JSON.stringify(user, null, 2);
console.log(pretty);

console.log("\n=== 3. JSON string -> Object ===");
const parsed = JSON.parse(compact);
console.log(parsed.name, "-", parsed.address.city);
console.log("courses[1] =", parsed.courses[1]);

console.log("\n=== 4. What JSON lost? ===");
console.log("greet:", parsed.greet);          // undefined
console.log("nickname:", parsed.nickname);    // undefined
console.log("joinedAt type:", typeof parsed.joinedAt); // "string" — dates become strings!

console.log("\n=== 5. Replacer: hide sensitive fields ===");
const safe = JSON.stringify(user, ["id", "name", "email"], 2);
console.log(safe);

console.log("\n=== 6. Reviver: restore the date ===");
const restored = JSON.parse(compact, (key, value) => {
  if (key === "joinedAt") return new Date(value);
  return value;
});
console.log("joinedAt is a Date again?", restored.joinedAt instanceof Date);

console.log("\n=== 7. Round-trip: stringify then parse gives a NEW object ===");
const clone = JSON.parse(JSON.stringify(user));
console.log("clone === user?", clone === user);        // false — different reference
console.log("clone.name === user.name?", clone.name === user.name); // true — same values
