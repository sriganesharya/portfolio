import portfolioData from "@/data/portfolio.json";

// Collect all skills from the portfolio data
const getAllSkills = () => {
  const { skills } = portfolioData;
  return [
    ...skills.languages,
    ...skills.frontend,
    ...skills.backend,
    ...skills.databases,
    ...skills.cloud,
    ...skills.tools,
  ];
};

// Helper function to escape special regex characters
const escapeRegex = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

export const highlightSkills = (text: string) => {
  const allSkills = getAllSkills();
  
  // Sort by length (longest first) to match longer phrases before shorter ones
  const sortedSkills = [...allSkills].sort((a, b) => b.length - a.length);
  
  let result = text;
  const matches: Array<{ skill: string; index: number; length: number }> = [];
  
  // Find all skill matches
  sortedSkills.forEach((skill) => {
    const escapedSkill = escapeRegex(skill);
    const regex = new RegExp(`\\b${escapedSkill}\\b`, 'gi');
    let match;
    
    while ((match = regex.exec(text)) !== null) {
      matches.push({
        skill: match[0],
        index: match.index,
        length: match[0].length,
      });
    }
  });
  
  // Sort matches by index (descending) to replace from end to start
  const sortedMatches = matches.sort((a, b) => b.index - a.index);
  
  // Remove overlapping matches
  const uniqueMatches: typeof matches = [];
  sortedMatches.forEach((match) => {
    const overlaps = uniqueMatches.some(
      (m) =>
        (match.index >= m.index && match.index < m.index + m.length) ||
        (match.index + match.length > m.index && match.index + match.length <= m.index + m.length)
    );
    if (!overlaps) {
      uniqueMatches.push(match);
    }
  });
  
  // Build the JSX result
  if (uniqueMatches.length === 0) return text;
  
  const parts: Array<string | JSX.Element> = [];
  let lastIndex = text.length;
  
  uniqueMatches.forEach((match, idx) => {
    // Add text after this match
    parts.unshift(text.substring(match.index + match.length, lastIndex));
    
    // Add the highlighted skill
    parts.unshift(
      <span key={`skill-${idx}`} className="text-primary font-medium">
        {match.skill}
      </span>
    );
    
    lastIndex = match.index;
  });
  
  // Add remaining text before first match
  parts.unshift(text.substring(0, lastIndex));
  
  return <>{parts}</>;
};
