interface MajorCredits { credits: number; __brand: 'Major'; }
interface MinorCredits { credits: number; __brand: 'Minor'; }

function major(credits: number): MajorCredits { return { credits, __brand: 'Major' }; }
function minor(credits: number): MinorCredits { return { credits, __brand: 'Minor' }; }

function sumMajorCredits(a: MajorCredits, b: MajorCredits): MajorCredits {
  return major(a.credits + b.credits);
}
function sumMinorCredits(a: MinorCredits, b: MinorCredits): MinorCredits {
  return minor(a.credits + b.credits);
}

// sanity:
const m = sumMajorCredits(major(3), major(4));
const n = sumMinorCredits(minor(2), minor(1));
console.log(m, n);
